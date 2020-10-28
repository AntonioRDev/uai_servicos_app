import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #283c73;
  align-items: center;
  justify-content: center;
`

export const InnerContainer = styled.View`
  background-color: #FFF;
  border-radius: 15px;
  padding: 50px 1px 50px 1px;
`

export const ImageContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const EmailContainer = styled.View`
  padding: 0 30px;
` 

export const Label = styled.Text`
    color: #283c73;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 6px;
`

export const Input = styled.TextInput`
    border-bottom-width: 1px;
    border-color: #bababa;
    margin-bottom: 6px;
` 

export const PasswordContainer = styled.View`
    padding: 0 30px;
` 

export const SignInContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 5px;
` 

export const Button = styled.View`
    padding: 10px 120px;
    border-radius: 10px;
    background-color: #283c73;
` 

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`

export const FooterContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
`

export const ForgotPass = styled.Text`
    color: #bababa;
    font-weight: bold;
    font-size: 16px;
`

export const Register = styled.Text`
    color: #283c73;
    font-weight: bold;
    font-size: 16px;
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
