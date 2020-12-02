import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background-color: #fff;
  border-radius: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 15px;
`;

export const ServiceImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const TitleInfos = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const SubText = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
  color: #808080;
  flex-direction: row;
`;

export const Stars = styled.View`
  flex-direction: row;
  margin-left: ${(props) => (props.search ? `10px` : 0)};
  margin-top: ${(props) => (props.search ? `-3px` : 0)}; ;
`;

export const TitleInfosService = styled.View`
  margin-left: 15px;
  justify-content: center;
`;

export const Div = styled.View`
  flex-direction: row;
`;

export const UserName = styled.Text`
  color: gray;
`;

export const Body = styled.View`
  border-bottom-width: 1px;
  border-color: #d3d3d3;
`;

export const Description = styled.Text`
  padding: 10px;
`;

export const Footer = styled.View`
  flex-direction: row-reverse;
  margin-bottom: 15px;
  margin-top: -30px;
  margin-left: 25px;
  /* border-bottom-width: 1px;
    border-color: #bababa; */
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteText = styled.Text`
  font-size: 16px;
  color: red;
`;

export const SeeMoreButton = styled.TouchableOpacity`
  color: #264aab;
`;

export const SeeMoreText = styled.Text``;
