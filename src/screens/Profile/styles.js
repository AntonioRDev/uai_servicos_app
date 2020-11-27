import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${(props) =>
    props.statusBarHeigth ? `${props.statusBarHeigth + 15}px` : 0};
  background-color: #283c73;
`;

export const ProfileHeader = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
`;

export const ImageProfile = styled.Image`
  height: 72px;
  width: 72px;
  border-radius: 35px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const SettingsCtn = styled.View`
  position: absolute;
  top: 0;
  right: 25px;
`;

export const ProfileBody = styled.View`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #f7f7f7;
  margin-top: 15px;
  padding-top: 30px;
  flex: 1;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
`;

export const TitleStyle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: #283c73;
`;

export const AddServiceButton = styled.View`
  margin-right: 24px;
`;

export const CardsScrollView = styled.ScrollView`
  padding: 0 8px;
`;

export const ServiceCardContainer = styled.View`
  margin-bottom: 15px;
`;

export const LeftAlign = styled.View`
  margin-left: auto;
`;
