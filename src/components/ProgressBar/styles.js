import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #d8d8d8;
  position: relative;
  height: 15px;
  width: 100%;
`;

export const ProgressDone = styled.View`
  background-color: #17b297;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100%;
  width: ${(props) => (props.step === 2 ? `60%` : `100%`)};
`;
