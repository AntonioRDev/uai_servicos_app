import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1e387d;
  padding-top: ${(props) =>
    props.statusBarHeigth ? `${props.statusBarHeigth + 70}px` : 0};
`;

export const InnerContainer = styled.View`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ffffff;
  margin-top: 5px;
  padding-top: 30px;
  flex: 1;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleView = styled.View`
  /* justify-content: center;
  align-items: center; */
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  margin-left: 15px;
`;

export const TitleStyle = styled.Text`
  font-size: 19px;
  margin-left: 5px;
  font-weight: bold;
  color: #1e387d;
  margin-bottom: 20px;
`;

export const FormGroup = styled.View`
  padding: 0 35px;
  margin-bottom: 5px;
`;

export const CategoryView = styled.View`
  margin-bottom: 25px;
`;

export const InputView = styled.View``;

export const DescriptionView = styled.View``;

export const ButtonView = styled.View`
  padding: 0 25px;
  margin-top: 20px;
`;
