import React, { useState, useCallback } from "react";
import { StatusBar } from "react-native";
import {
  Dialog,
  Button,
  Paragraph
} from "react-native-paper";
import {
  Container,
  ProfileHeader,
  ImageProfile,
  Name,
  SettingsCtn,
  ProfileBody,
  TitleContainer,
  TitleStyle,
  AddServiceButton,
  CardsScrollView,
  ServiceCardContainer,
  LeftAlign,
} from "./styles";
import { Menu, Divider } from "react-native-paper";
import Plus from "../../assets/icons/plus.svg";
import Settings from "../../assets/icons/settings.svg";
import ServiceCard from "../../components/ServiceCard";
import { useNavigation } from "@react-navigation/native";
import { logoff } from "../../services/authentication";
import { getServicesByUser } from "../../services/service";
import { useGlobal } from "../../contexts/Global";
import { useFocusEffect } from "@react-navigation/native";
import { showToast, hideToast } from "../../services/util";
import MonaLisa from "../../assets/images/mona-lisa.jpg";
import Rating from "../../components/Rating";
import { deleteService as _deleteService } from "../../services/service"

export default () => {
  const navigation = useNavigation();
  const { user } = useGlobal();
  const [serviceCards, setServiceCards] = useState([]);
  const [serviceIdToDelete, setServiceIdToDelete] = useState("");
  
  const [menuVisible, setMenuVisible] = useState(false);
  const [dialogVisible, setDeleteDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const _getServicesByUser = async () => {
        try {
          showToast("info", "Carregando serviços.");
          setServiceCards([]);

          const services = await getServicesByUser(user.usuarioId);
          setServiceCards(services ? services : []);

          hideToast();
        } catch (error) {
          console.log("profile _getServicesByUser error", error);
        }
      };

      _getServicesByUser();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const logout = async () => {
    closeMenu();
    await logoff();
    navigation.navigate("Login");
  };

  const editProfile = () => {

  }

  const openDeleteDialog = (serviceId) => {
    setServiceIdToDelete(serviceId);
    setDeleteDialogVisible(true);
  }

  const onCancelDeleteDialog = () => {
    setServiceIdToDelete("");
    setDeleteDialogVisible(false);
  }

  const deleteService = async() => {
    setLoading(true);
    showToast("info", "Deletando serviço.");

    try {
      const response = await _deleteService(serviceIdToDelete);

      if(response && response.status !== 200) {
        setLoading(false);
        hideToast();
        setDeleteDialogVisible(false);
        showToast("error", "Erro ao deletar serviço");
        setServiceIdToDelete("");
        return;
      }

      const newServices = serviceCards.filter((service) => service.servicoId !== serviceIdToDelete);

      setServiceCards(newServices);
      setLoading(false);
      hideToast();
      setDeleteDialogVisible(false);
      showToast("success", "Serviço deletado com sucesso");
      setServiceIdToDelete("");
    } catch(error) {
      console.log("deleteService error", error);

      setLoading(false);
      hideToast();
      setDeleteDialogVisible(false);
      showToast("error", "Erro ao deletar serviço");
      setServiceIdToDelete("");
    }
  }

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      <SettingsCtn statusBarHeigth={StatusBar.currentHeight}>
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <Settings
              height="30"
              width="30"
              fill="#111111"
              onPress={openMenu}
            />
          }
        >
          <Menu.Item icon="account-edit" onPress={editProfile} title="Editar Perfil" />
          <Divider />
          <Menu.Item icon="logout" onPress={logout} title="Sair" />
        </Menu>
      </SettingsCtn>

      <ProfileBody>
        <ImageProfile source={MonaLisa} />

        <ProfileHeader>
          <Name>
            Olá! {user.nome} {"\n"}{" "}
            <Rating qtdStar={4}></Rating>
          </Name>

        </ProfileHeader>

        <TitleContainer>
          <TitleStyle>Meus Serviços</TitleStyle>

          <AddServiceButton>
            <Plus
              height="32"
              width="32"
              fill="#1e387d"
              onPress={() => navigation.navigate("NewService")}
            />
          </AddServiceButton>
        </TitleContainer>

        <CardsScrollView>
          {serviceCards.map((service) => {
            return (
              <ServiceCardContainer key={service.servicoId}>
                <ServiceCard
                  title={service.titulo}
                  userName={user.nome}
                  to="profile"
                  onDelete={() => openDeleteDialog(service.servicoId)}
                ></ServiceCard>
              </ServiceCardContainer>
            );
          })}
        </CardsScrollView>
      </ProfileBody>

      <Dialog visible={dialogVisible} onDismiss={onCancelDeleteDialog}>
        <Dialog.Title>Confirmação</Dialog.Title>

        <Dialog.Content>
          <Paragraph>Tem certeza que deseja deletar esse serviço?</Paragraph>
        </Dialog.Content>

        <Dialog.Actions>
          <Button onPress={onCancelDeleteDialog} disabled={loading}>Cancelar</Button>
          <Button onPress={deleteService} disabled={loading}>Deletar</Button>
        </Dialog.Actions>
      </Dialog>
    </Container>
  );
};
