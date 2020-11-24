import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { TextInput, Text } from 'react-native-paper';

Container,
  InnerContainer,
  TextContainer,
  TextLogin,
  BodyContainer

export const Container = styled.View`
  flex: 1;
  background-color: #283c73;
  align-items: center;
  justify-content: center;
  padding: 50px 50px;
`

export const TextContainer = styled.View`
  margin-bottom: 20px;
`;

export const InnerContainer = styled.View`
  background-color: #FFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; 
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 5%;
  padding-top: 10%;
`

export const ImageContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TextLogin = styled.Text`
  color: #283c73;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 25px;
  margin-left: 5px
`

export const BodyContainer = styled.View`
  padding: 0 30px;
`

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 10,
    backgroundColor: "#283c73"
  }
});

export default styles;
