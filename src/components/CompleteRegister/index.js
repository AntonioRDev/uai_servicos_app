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

export default () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { step, setStep } = useRegister();
  const navigation = useNavigation();

  const onDateChange = (event, selectedDate) => {
    setDate(selectedDate || date);
    setShowDatePicker(false);
  };

  return (
    <>
      <ProgressContainer>
        <ProgressBar />
      </ProgressContainer>

      {step === 2 ? (
        <>
          <FormGroup>
            <Label>Nome</Label>
            <Input placeholder="Digite seu nome" />
          </FormGroup>

          <FormGroup>
            <Label>CPF</Label>
            <Input placeholder="Digite seu CPF" />
          </FormGroup>

          <FormGroup>
            <Label>RG</Label>
            <Input placeholder="Digite seu RG" />
          </FormGroup>
        </>
      ) : (
        <>
          <FormGroup>
            <Label>Data de Nascimento</Label>
            <DateInput onPress={() => setShowDatePicker(true)}>
              <DateText>{format(date, "dd/M/yyyy")}</DateText>
            </DateInput>

            {showDatePicker && (
              <DateTimePicker
                value={date}
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
                <CheckBox />
                <GenderText>M</GenderText>
              </GenderCheckContainer>

              <GenderCheckContainer>
                <CheckBox />
                <GenderText>F</GenderText>
              </GenderCheckContainer>
            </GenderContainer>
          </FormGroup>

          <FormGroup>
            <Label>Endereço</Label>
            <Input placeholder="Digite seu endereço" />
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
          <NextButton onPress={() => navigation.navigate("MainTab")}>
            <NextText>finalizar</NextText>
          </NextButton>
        )}
      </NextContainer>
    </>
  );
};
