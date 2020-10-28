import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import Button from "../../components/Button";
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
  ButtonText,
  Register,
} from "./styles";
import Logo from "../../assets/images/logo.png";

const Login = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <Image source={Logo} />
        </ImageContainer>

        <View>
          <EmailContainer>
            <Label>Email</Label>
            <Input placeholder="Dgite seu e-mail" />
          </EmailContainer>

          <PasswordContainer>
            <Label>Senha</Label>
            <Input secureTextEntry={true} placeholder="Digite sua senha" />
          </PasswordContainer>

          <SignInContainer>
            <Button style={styles.button}>
              <ButtonText>Entrar</ButtonText>
            </Button>
          </SignInContainer>
        </View>

        <FooterContainer>
          <ForgotPass>Esqueceu a senha?</ForgotPass>
          <Register onPress={() => navigation.navigate("SignUp")}>
            Cadastrar-se
          </Register>
        </FooterContainer>
      </InnerContainer>
    </Container>
  );
};

export default Login;
