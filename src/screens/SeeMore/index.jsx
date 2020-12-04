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
} from "./styles";
import MonaLisa from "../../assets/images/mona-lisa.jpg";

const SeeMore = ({ nome, descricao, avaliacao, km, email }) => {
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
              <Name>Xerox Holmes {nome}</Name>
              {"\n"}
              <Rating qtdStar={5}></Rating>
            </M5>
          </Div>
          <View
            style={{
              borderBottomColor: "#808080",
              borderBottomWidth: 0.2,
            }}
          />
          <Div>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget rutrum odio, nec sodales leo. Ut at ultricies
              urna. Duis aliquet magna dui, quis dapibus tellus imperdiet quis.
              Nulla porta lacus non mi ullamcorper porta. Praesent nunc felis,
              dapibus vitae posuere eu, placerat id ligula.{"\n"} {"\n"}Fusce at
              vestibulum mi. Curabitur sollicitudin quam eu justo elementum,
              vitae aliquet nulla lacinia. Nam pharetra velit ac quam lobortis,
              sit amet dignissim purus efficitur.
            </Description>
          </Div>
        </InnerContainer>
      </Container>
      <FAB
        style={styles.fab}
        icon="whatsapp"
        color="#fff"
        onPress={() => console.log("Pressed")}
      />
    </>
  );
};

export default SeeMore;
