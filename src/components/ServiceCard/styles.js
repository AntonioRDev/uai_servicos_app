import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View`
  background-color: #FFF;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 15px;
  border: 1px solid #999999;
`;

export const ServiceImage = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 35px;
`;

export const TitleInfos = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  margin-bottom: 5px;
`;

export const Stars = styled.View`
    flex-direction: row;
    margin-left: ${props => props.search ? `10px` : 0};
    margin-top: ${props => props.search ? `-3px` : 0};;
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
  border: 1px solid #999999;
  border-top-width: 0;
  border-bottom-width: 0;
`;

export const Description = styled.Text`
  padding: 10px;
`;

export const Footer = styled.View`
    flex-direction: row-reverse;
    padding: 10px;
    border: 1px solid #999999;
    /* border-bottom-width: 1px;
    border-color: #bababa; */
`;

export const DeleteButton = styled.TouchableOpacity`
  
`;

export const DeleteText = styled.Text`
  font-size: 16px;
  color: red;
`;

export const SeeMoreButton = styled.TouchableOpacity`
  
`;

export const SeeMoreText = styled.Text`
  
`;

