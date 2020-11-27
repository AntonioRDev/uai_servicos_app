import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Card, Title, Paragraph, Button, List } from "react-native-paper";
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
import ProfileImage from "../../assets/images/alexandre-pires.jpg";
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

  useEffect(() => {
    const _getServicesByUser = async () => {
      try {
        const services = await getServicesByUser(user.usuarioId);
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
        <ImageProfile source={ProfileImage} />
        <Name>{user.nome}</Name>

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
          <TitleStyle>Meus Serviços</TitleStyle>

          <AddServiceButton>
            <Plus
              height="26"
              width="26"
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
                      <Button>Remover</Button>
                    </LeftAlign>
                  </Card.Actions>
                </Card>
              </ServiceCardContainer>
            );
          })}
        </CardsScrollView>
      </ProfileBody>
    </Container>
  );
};
