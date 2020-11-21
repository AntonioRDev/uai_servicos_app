import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';
import styles, {
  Container,
  InnerContainer,
  ImageContainer,
  EmailContainer,
  Label,
  Input,
  PasswordContainer,
  SignInContainer,
  FooterContainer,
  ForgotPass,
  TextFieldCustom,
  ButtonText,
  TextContainer,
  Register,
  TextLogin,
  BodyContainer
} from "./styles";

import {Logo} from '../../assets/images/alexandre-pires.jpg'

const Login = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/07/UNESCO_logo_white.png'}}
       style={{width: 250, height: 250, marginTop: -310}} />
      <InnerContainer>  
        <BodyContainer>        
          <TextLogin>Login</TextLogin>
          <TextContainer>
            <TextInput label='Email' mode='outlined'></TextInput>
          </TextContainer>
          <TextContainer>
            <TextInput label='Senha' secureTextEntry={true} mode='outlined'></TextInput>
          </TextContainer>

          <TextContainer>
            <Button mode="contained" uppercase={false} onPress={() => navigation.navigate("MainTab")}>
              Fazer Login
            </Button>
          </TextContainer>
   
          <TextContainer>
            <Button mode="outlined" uppercase={false} onPress={() => navigation.navigate("SignUp")}>
              Fazer Cadastro
            </Button>
          </TextContainer>       
        </BodyContainer>     
      </InnerContainer>
    </Container>
  );
};

export default Login;
