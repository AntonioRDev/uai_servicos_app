import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  ServiceImage,
  TitleInfos,
  Title,
  Stars,
  TitleInfosService,
  Div,
  UserName,
  Body,
  Description,
  Footer,
  DeleteButton,
  DeleteText,
  SeeMoreButton,
  SeeMoreText,
  SubText,
} from "./styles";
import Star from "../../assets/icons/star.svg";
import Rating from "../Rating";
import MonaLisa from "../../assets/images/mona-lisa.jpg";

export default ({
  to,
  title,
  userName,
  description,
  qtd,
  onDelete,
  km,
  urlImg,
}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <ServiceImage source={MonaLisa} />

        <TitleInfos>
          <Title>{title}</Title>
          <SubText>
            {userName} - {to !== "profile" ? ` ${km}km ` : null}
          </SubText>
          <Rating qtdStar={qtd}></Rating>
        </TitleInfos>
      </Header>

      <Footer>
        {to === "profile" ? (
          <DeleteButton onPress={onDelete ? onDelete : null}>
            <DeleteText>Deletar</DeleteText>
          </DeleteButton>
        ) : (
          <SeeMoreButton onPress>
            <SeeMoreText
              onPress={() =>
                navigation.navigate("SeeMore", {
                  title: title,
                  userName: userName,
                  description: description,
                  qtd: qtd,
                  km: km,
                  urlImg: urlImg,
                })
              }
            >
              Veja Mais...
            </SeeMoreText>
          </SeeMoreButton>
        )}
      </Footer>
    </Container>
  );
};
