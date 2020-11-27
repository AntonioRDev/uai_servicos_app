import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import {
  Container,
  ProfileHeader,
  ImageProfile,
  Name,
  SettingsCtn,
  ProfileBody,
  TitleContainer,
  Title,
  AddServiceButton,
  CardsScrollView,
  ServiceCardContainer,
} from "./styles";
import { Menu, Divider } from "react-native-paper";
import Plus from "../../assets/icons/plus.svg";
import Settings from "../../assets/icons/settings.svg";
import ProfileImage from "../../assets/images/alexandre-pires.jpg";
import ServiceCard from "../../components/ServiceCard";
import { useNavigation } from "@react-navigation/native";
import { logoff } from "../../services/authentication";
import { getServicesByUser } from "../../services/service";

export default () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [serviceCards, setServiceCards] = useState([]);

  useEffect(() => {
    const _getServicesByUser = async () => {
      try {
        const services = await getServicesByUser(2);
        setServiceCards(services);
      } catch (error) {
        console.log("profile _getServicesByUser error", error);
      }
    };

    _getServicesByUser();
  }, []);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);

  const logout = async () => {
    closeMenu();
    await logoff();
    navigation.navigate("Login");
  };

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      <ProfileHeader>
        <ImageProfile source={ProfileImage} />
        <Name>Alexandre Pires</Name>

        <SettingsCtn>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Settings height="24" width="24" onPress={openMenu} />}
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Divider />
            <Menu.Item icon="logout" onPress={logout} title="Sair" />
          </Menu>
        </SettingsCtn>
      </ProfileHeader>

      <ProfileBody>
        <TitleContainer>
          <Title>Meus Serviços</Title>

          <AddServiceButton>
            <Plus height="26" width="26" fill="#283c73" />
          </AddServiceButton>
        </TitleContainer>

        <CardsScrollView>
          {serviceCards.map((service) => {
            return (
              <ServiceCardContainer key={service.servicoId}>
                <ServiceCard
                  to="profile"
                  title={service.titulo}
                  userName={service.usuarioId}
                  description={service.descricao}
                />
              </ServiceCardContainer>
            );
          })}
        </CardsScrollView>
      </ProfileBody>
    </Container>
  );
};
