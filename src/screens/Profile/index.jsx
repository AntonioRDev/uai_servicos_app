import React, { useState, useEffect } from "react";
import { StatusBar, View } from "react-native";
import Modal from "react-native-modal";
import {
  Card,
  Title,
  Paragraph,
  Button,
  List,
  Avatar,
  Portal,
  Provider,
  Text,
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

export default () => {
  const navigation = useNavigation();
  const { user } = useGlobal();
  const [menuVisible, setMenuVisible] = useState(false);
  const [serviceCards, setServiceCards] = useState([]);

  const [isModalVisible, setVisible] = React.useState(false);

  useEffect(() => {
    const _getServicesByUser = async () => {
      try {
        const services = await getServicesByUser("2");
        setServiceCards(services ? services : []);
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
        <ImageProfile
          source={{
            uri: "https://ui-avatars.com/api/?name=Lucas+Ferreira+Braga",
          }}
        />
        <Name>Olá! Lucas Braga. {user.nome}</Name>

        <SettingsCtn>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Settings height="30" width="30" onPress={openMenu} />}
          >
            <Menu.Item onPress={() => {}} title="Menu de Opções" />
            <Divider />
            <Menu.Item icon="logout" onPress={logout} title="Sair" />
          </Menu>
        </SettingsCtn>
      </ProfileHeader>

      <ProfileBody>
        <TitleContainer>
          <TitleStyle>Meus Serviços</TitleStyle>

          <AddServiceButton>
            <Plus
              height="32"
              width="32"
              fill="#283c73"
              onPress={() => navigation.navigate("NewService")}
            />
          </AddServiceButton>
        </TitleContainer>

        <CardsScrollView>
          {serviceCards.map((service) => {
            return (
              <ServiceCardContainer>
                <Card>
                  <Card.Content>
                    <List.Accordion
                      style={{ marginLeft: -15, marginTop: -15 }}
                      title={service.titulo}
                      titleStyle={{ fontSize: 18 }}
                      openMenu={true}
                    >
                      <Paragraph>{service.descricao}</Paragraph>
                    </List.Accordion>
                  </Card.Content>

                  <Card.Actions>
                    <LeftAlign>
                      <Button
                        style={{ color: "#283c73" }}
                        uppercase={false}
                        onPress={() => setVisible(true)}
                      >
                        Remover
                      </Button>
                    </LeftAlign>
                  </Card.Actions>
                </Card>
              </ServiceCardContainer>
            );
          })}
          {/* <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={() => setVisible(true)} />
            <Modal isVisible={isModalVisible}>
              <View style={{ flex: 1 }}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={() => setVisible(false)} />
              </View>
            </Modal>
          </View> */}
        </CardsScrollView>
      </ProfileBody>
    </Container>
  );
};
