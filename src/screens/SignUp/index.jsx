import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {
  Container,
  InnerContainer,
  ImageContainer,
  EmailContainer,
  Label,
  Input,
  PasswordContainer,
  SignInContainer,
  FooterContainer,
  Button,
  ButtonText,
  BackLogin,
  LoginCta,
  PrivacityText,
  PrivacityContainer,
  PrivacityBolderText
} from "./styles";
import Logo from "../../assets/images/logo.png";
import CompleteRegister from "../../components/CompleteRegister";
import { useRegister } from "../../contexts/Register";

export default () => {
  const [privacityCheck, setPrivacityCheck] = useState(false);
  const { step, setStep } = useRegister();
  const navigation = useNavigation();

  return (
      <Container>
        <InnerContainer>
          {
            step === 1 ? (
              <>
                {/* <ImageContainer>
                  <Image source={Logo} />
                </ImageContainer> */}

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
                    <Button onPress={() => setStep(step + 1)}>
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
              </>
            ) : (
              <CompleteRegister />
            )
          }
        </InnerContainer>
      </Container>
  );
};
