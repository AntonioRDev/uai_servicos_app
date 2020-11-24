import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #d8d8d8;
  border-radius: 3px;
  position: relative;
  height: 15px;
  width: 80%;
`;

export const ProgressDone = styled.View`
  background-color: #283c73;
  border-radius: 3px;
  height: 100%;
  width: ${(props) => (props.step === 2 ? `60%` : `100%`)};
`;
