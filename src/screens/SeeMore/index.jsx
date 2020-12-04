import React, { useState, useEffect } from "react";
import { StyleSheet, View, Linking } from "react-native";
import { Button, Text, FAB, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Rating from "../../components/Rating";
import {
  Container,
  InnerContainer,
  Title,
  Div,
  Name,
  ImageProfile,
  DivCol,
  M5,
  Description,
  Row,
  Voltar,
  Email,
  Xistose,
} from "./styles";
import MonaLisa from "../../assets/images/mona-lisa.jpg";
import { getUrlWhatsapp } from "../../services/service/index";

const SeeMore = ({ route }) => {
  const styles = StyleSheet.create({
    fab: {
      position: "absolute",
      backgroundColor: "#25D366",
      color: "#ffffff",
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });

  const {
    title,
    userName,
    description,
    qtd,
    km,
    urlImg,
    id,
    email,
  } = route.params;
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Row>
          <IconButton
            icon="arrow-left"
            color={"#fff"}
            size={20}
            onPress={() => navigation.navigate("MainTab")}
          ></IconButton>
          <Voltar>Voltar</Voltar>
        </Row>
        <Title>Entre em contato,{"\n"}um maravilhoso serviço te espera!</Title>
        <InnerContainer>
          <Div>
            <ImageProfile source={MonaLisa} />
            <M5>
              <Name>{userName}</Name> {"\n"}
              <Email>{title}</Email>
              {"\n"}
              <Rating qtdStar={JSON.stringify(qtd)}></Rating>
            </M5>
          </Div>
          <View
            style={{
              borderBottomColor: "#808080",
              borderBottomWidth: 0.2,
            }}
          />
          <Div>
            <Xistose>
              <Description>Email: {email}</Description>
              {"\n"}
              <Description>Você está a {km}km deste usuário</Description>
              {"\n"}
              {"\n"}
              {getUrlWhatsapp(id).whatsapp}
              <Description>{description}</Description>
            </Xistose>
          </Div>
        </InnerContainer>
      </Container>
      <FAB
        style={styles.fab}
        icon="whatsapp"
        color="#fff"
        onPress={() => {
          Linking.openURL("https://wa.me/3344556677");
        }}
      />
    </>
  );
};

export default SeeMore;
