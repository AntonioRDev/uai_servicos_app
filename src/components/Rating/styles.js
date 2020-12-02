import styled from "styled-components/native";

export const Stars = styled.View`
  flex-direction: row;
  margin-left: ${(props) => (props.search ? `10px` : 0)};
  margin-top: ${(props) => (props.search ? `-3px` : 0)}; ;
`;
