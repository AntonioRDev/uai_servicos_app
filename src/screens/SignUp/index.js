import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import CheckBox from '@react-native-community/checkbox';
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
  ButtonText,
  BackLogin,
  LoginCta,
  PrivacityText,
  PrivacityContainer,
  PrivacityBolderText
} from "./styles";
import Logo from "../../assets/images/logo.png";

export default () => {
  const [privacityCheck, setPrivacityCheck] = useState(false);
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
            <Input placeholder="Insira seu e-mail" />
          </EmailContainer>

          <PasswordContainer>
            <Label>Senha</Label>
            <Input secureTextEntry={true} placeholder="Digite sua senha" />
          </PasswordContainer>

          <PrivacityContainer>
              <CheckBox 
                value={privacityCheck}
                onValueChange={(newValue) => setPrivacityCheck(newValue)}
              />
              <PrivacityText>
                  Eu aceito os <PrivacityBolderText>Termos de Uso e Política de Privacidade</PrivacityBolderText>
              </PrivacityText>
          </PrivacityContainer>

          <SignInContainer>
            <Button style={styles.button}>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </SignInContainer>
        </View>

        <FooterContainer>
            <BackLogin>
                Tem uma conta? 
            </BackLogin>
            <LoginCta onPress={() => navigation.navigate("Login")}>Login</LoginCta>
        </FooterContainer>
      </InnerContainer>
    </Container>
  );
};
