import React, { useState } from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button, IconButton } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import {
  Container,
  InnerContainer,
  TextContainer,
  TextLogin,
  BodyContainer,
  PrivacityContainer,
  PrivacityText,
  PrivacityBolderText,
} from "./styles";

import CompleteRegister from "../../components/CompleteRegister";
import { useRegister } from "../../contexts/Register";
import { isEmail, showToast } from "../../services/util";

export default () => {
  const [privacityCheck, setPrivacityCheck] = useState(false);
  const { step, setStep, email, setEmail, password, setPassword } = useRegister();
  const navigation = useNavigation();

  const nextStepRegister = () => {
    if(!email) {
      showToast("error", "Digite o email.");
      return;
    }

    if(!password){
      showToast("error", "Digite a senha.");
      return;
    }

    if(!isEmail(email)){
      showToast("error", "Digite um email válido.");
      return;
    }

    if(password.length < 6){
      showToast("error", "A senha deverá conter pelomenos 6 caracteres.");
      return;
    }

    setStep(step + 1);
  }

  return (
    <Container>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/0/07/UNESCO_logo_white.png",
        }}
        style={{ width: 250, height: 250, marginTop: -380 }}
      />
      <InnerContainer>
        {step === 1 ? (
          <BodyContainer>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <IconButton
                icon="arrow-left"
                color={"#6A6180"}
                size={20}
                onPress={() => navigation.navigate("Login")}
              ></IconButton>
              <TextLogin>Cadastro</TextLogin>
            </View>
            <TextContainer>
              <TextInput label="Email" value={email} onChangeText={text => setEmail(text)}></TextInput>
            </TextContainer>
            <TextContainer>
              <TextInput label="Senha" value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}></TextInput>
            </TextContainer>

            <TextContainer>
              <PrivacityContainer>
                <CheckBox
                  value={privacityCheck}
                  onValueChange={(newValue) => setPrivacityCheck(newValue)}
                />
                <PrivacityText>
                  Eu aceito os{" "}
                  <PrivacityBolderText>Termos de Uso</PrivacityBolderText>
                </PrivacityText>
              </PrivacityContainer>
            </TextContainer>

            <TextContainer>
              <Button
                mode="contained"
                uppercase={false}
                onPress={nextStepRegister}
              >
                Fazer Cadastro
              </Button>
            </TextContainer>

            <TextContainer>
              <Button
                mode="outlined"
                uppercase={false}
                onPress={() => navigation.navigate("Login")}
              >
                Fazer Login
              </Button>
            </TextContainer>
          </BodyContainer>
        ) : (
          <BodyContainer>
            <CompleteRegister />
          </BodyContainer>
        )}
      </InnerContainer>
    </Container>
  );
};
