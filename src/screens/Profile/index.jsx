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
import Plus from "../../assets/icons/plus.svg";
import Settings from "../../assets/icons/settings.svg";
import ProfileImage from "../../assets/images/alexandre-pires.jpg";
import ServiceCard from "../../components/ServiceCard";

export default () => {
  const [qty, setQty] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      <ProfileHeader>
        <ImageProfile source={ProfileImage} />
        <Name>Alexandre Pires</Name>

        <SettingsCtn>
          <Settings height="24" width="24" />
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
