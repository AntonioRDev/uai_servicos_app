import styled from "styled-components/native";

export const ProgressContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const FormGroup = styled.View`
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const Label = styled.Text`
  color: #1e387d;
  font-weight: bold;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #bababa;
`;

export const DateInput = styled.TouchableHighlight`
  margin-top: 5px;
  border-bottom-width: 1px;
  border-color: #bababa;
  padding-bottom: 2px;
`;

export const DateText = styled.Text``;

export const GenderContainer = styled.View`
  flex-direction: row;
`;

export const GenderCheckContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const GenderText = styled.Text``;

export const NextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NextButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #1e387d;
  border-radius: 5px;
`;

export const NextText = styled.Text`
  color: white;
  font-weight: bold;
`;
