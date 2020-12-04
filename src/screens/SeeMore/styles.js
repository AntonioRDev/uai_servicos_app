import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { TextInput, Text } from "react-native-paper";

Container, InnerContainer, Title, Div;

export const Container = styled.View`
  flex: 1;
  background-color: #1e387d;
  padding: 55px 10px;
`;

export const InnerContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 5%;
  padding-top: 5%;
`;

export const Div = styled.View`
  padding: 0px 25px 0px 25px;
  margin-bottom: 15px;
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 25px;
  margin-top: 80px;
`;

export const Voltar = styled.Text`
  color: #ffffff;
  font-size: 20px;
  margin-top: 8px;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 45px;
  color: #363636;
`;

export const Name = styled.Text`
  color: #111111;
  font-size: 18px;
  margin-bottom: 15px;
  margin-left: 15px;
`;

export const Email = styled.Text`
  color: #808080;
  font-size: 16px;
  margin-bottom: 25px;
  margin-left: 15px;
`;

export const M5 = styled.Text`
  margin-top: 5px;
  margin-left: 15px;
`;

export const Xistose = styled.Text`
  margin-top: 20px;
  margin-bottom: 45px;
`;

export const DivCol = styled.View`
  flex-direction: column;
`;

export const ImageProfile = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 20px;
`;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 10,
    backgroundColor: "#1e387d",
  },
});

export default styles;
