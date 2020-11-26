import React, { useState } from "react";
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
import { logoff } from "../../services/authentication" 

export default () => {
  const navigation = useNavigation();
  const [qty, setQty] = useState([1, 2, 3, 4, 5, 6]);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);
  
  const logout = async() => {
    closeMenu();
    await logoff();
    navigation.navigate("Login");
  }

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      <ProfileHeader>
        <ImageProfile source={ProfileImage} />
        <Name>Alexandre Pires</Name>

        <SettingsCtn>          
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Settings height="24" width="24" onPress={openMenu}/>}
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
          {qty.map((q) => {
            return (
              <ServiceCardContainer key={q}>
                <ServiceCard to="profile" />
              </ServiceCardContainer>
            );
          })}
        </CardsScrollView>
      </ProfileBody>
    </Container>
  );
};
