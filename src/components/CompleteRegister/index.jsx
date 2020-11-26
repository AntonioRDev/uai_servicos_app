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
} from "./styles";
import { useRegister } from "../../contexts/Register";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../ProgressBar";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckBox from "@react-native-community/checkbox";
import { TextInput, Button } from "react-native-paper";
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
            <TextInput label="Nome"></TextInput>
          </FormGroup>

          <FormGroup>
            <TextInput label="CPF"></TextInput>
          </FormGroup>

          <FormGroup>
            <TextInput label="RG"></TextInput>
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
        <Button
          icon="arrow-left"
          uppercase={false}
          onPress={() => setStep(step - 1)}
        >
          voltar
        </Button>

        {step === 2 && (
          <Button
            mode="contained"
            uppercase={false}
            onPress={() => setStep(step + 1)}
          >
            próximo
          </Button>
        )}

        {step === 3 && (
          <Button
            mode="contained"
            uppercase={false}
            onPress={() => navigation.navigate("MainTab")}
          >
            finalizar
          </Button>
        )}
      </NextContainer>
    </>
  );
};
