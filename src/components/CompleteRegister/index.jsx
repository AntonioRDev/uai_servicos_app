import React, { useState } from "react";
import {
  ProgressContainer,
  FormGroup,
  Label,
  Input,
  DateInput,
  DateText,
  GenderContainer,
  GenderCheckContainer,
  GenderText,
  NextContainer,
  NextButton,
  NextText,
} from "./styles";
import { useRegister } from "../../contexts/Register";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../ProgressBar";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckBox from "@react-native-community/checkbox";
import { format } from "date-fns";
import { showToast } from "../../services/util";
import { createUser } from "../../services/user";
import { login } from "../../services/authentication";

export default () => {
  const [mCheck, setMCheck] = useState(true);
  const [fCheck, setFCheck] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {
    step,
    setStep,
    email, 
    password,
    name,
    setName,
    cpf,
    setCpf,
    rg,
    setRg,
    bDate,
    setBDate,
    phone,
    setPhone,
    gender,
    setGender,
    address,
    setAddress,
  } = useRegister();
  const navigation = useNavigation();

  const onDateChange = (event, selectedDate) => {
    setBDate(selectedDate || bDate);
    setShowDatePicker(false);
  };

  const onGenderChange = async(gender) => {
    if(gender === "M") {
      if(!mCheck) {
        setFCheck(false);
        setMCheck(true);
        setGender("M");
      }
    } else {
      if(!fCheck) {
        setMCheck(false);
        setFCheck(true);
        setGender("F");
      }
    }
  }

  const onRegister = async() => {
    console.log("onRegister");

    if(!name){
      showToast("error", "Digite seu nome.");
      setStep(2);
      return;
    }

    if(!cpf){ 
      showToast("error", "Digite seu cpf.");
      setStep(2);
      return;
    }

    if(!rg) {
      showToast("error", "Digite seu RG.");
      setStep(2);
      return;
    }

    if(!address) {
      showToast("error", "Digite seu endereço.");
      return;
    }

    if(!phone) {
      showToast("error", "Digite seu telefone.");
      return;
    }

    try {
      await createUser(email, password, name, rg, cpf, bDate, gender, address, phone);
    } catch(error) {
      showToast("error", "Erro ao criar conta, tente novamente mais tarde.");
      return;
    }

    try {
      const reponse = await login(email, password);     
      
      if (!reponse || response.status !== 200){
        showToast("success", "Conta criada com sucesso.");
        navigation.navigate("Login");
      }

      navigation.navigate("MainTab");
    } catch (error) {
      showToast("success", "Conta criada com sucesso.");
      navigation.navigate("Login");
    }
  }

  return (
    <>
      <ProgressContainer>
        <ProgressBar />
      </ProgressContainer>

      {step === 2 ? (
        <>
          <FormGroup>
            <Label>Nome</Label>
            <Input
              placeholder="Digite seu nome"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </FormGroup>

          <FormGroup>
            <Label>CPF</Label>
            <Input
              placeholder="Digite seu CPF"
              onChangeText={(text) => setCpf(text)}
              value={cpf}
            />
          </FormGroup>

          <FormGroup>
            <Label>RG</Label>
            <Input
              placeholder="Digite seu RG"
              onChangeText={(text) => setRg(text)}
              value={rg}
            />
          </FormGroup>
        </>
      ) : (
        <>
          <FormGroup>
            <Label>Data de Nascimento</Label>
            <DateInput onPress={() => setShowDatePicker(true)}>
              <DateText>{format(bDate, "dd/M/yyyy")}</DateText>
            </DateInput>

            {showDatePicker && (
              <DateTimePicker
                value={bDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onDateChange}
              />
            )}
          </FormGroup>

          <FormGroup>
            <Label>Gênero</Label>
            <GenderContainer>
              <GenderCheckContainer>
                <CheckBox value={mCheck} onValueChange={() => onGenderChange("M")}/>
                <GenderText>M</GenderText>
              </GenderCheckContainer>

              <GenderCheckContainer>
                <CheckBox value={fCheck} onValueChange={() => onGenderChange("F")}/>
                <GenderText>F</GenderText>
              </GenderCheckContainer>
            </GenderContainer>
          </FormGroup>

          <FormGroup>
            <Label>Endereço</Label>
            <Input
              placeholder="Digite seu endereço"
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
          </FormGroup>

          <FormGroup>
            <Label>Telefone</Label>
            <Input
              placeholder="Digite seu telefone"
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
          </FormGroup>
        </>
      )}

      <NextContainer>
        <NextButton onPress={() => setStep(step - 1)}>
          <NextText>voltar</NextText>
        </NextButton>

        {step === 2 && (
          <NextButton onPress={() => setStep(step + 1)}>
            <NextText>próximo</NextText>
          </NextButton>
        )}

        {step === 3 && (
          <NextButton onPress={onRegister}>
            <NextText>finalizar</NextText>
          </NextButton>
        )}
      </NextContainer>
    </>
  );
};
