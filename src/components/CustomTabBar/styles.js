import styled from "styled-components/native";

export const Container = styled.View`
  height: 60px;
  background-color: #1e387d;
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-bottom-width: ${(props) => (props.active ? `3px` : `0`)};
  border-color: #bababa;
`;
