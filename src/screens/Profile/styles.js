import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${(props) =>
    props.statusBarHeigth ? `${props.statusBarHeigth + 15}px` : 0};
  background-color: #1e387d;
  padding-top: 120px;
`;

export const ProfileHeader = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: -60px;
  margin-left: 55px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #111111;
  line-height: 25px;
  margin-top: -50px;
  margin-left: 125px;
`;

export const SettingsCtn = styled.View`
  position: absolute;
  top: 0;
  right: 25px;
`;

export const ProfileBody = styled.View`
  border-top-left-radius: 55px;
  border-top-right-radius: 5px;
  background-color: #ffffff;
  margin-top: 5px;
  padding-top: 30px;
  flex: 1;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 12px;
  margin-bottom: 15px;
`;

export const TitleStyle = styled.Text`
  font-size: 19px;
  margin-left: 5px;
  font-weight: bold;
  color: #1e387d;
`;

export const AddServiceButton = styled.View`
  margin-right: 24px;
`;

export const CardsScrollView = styled.ScrollView`
  padding: 0 8px;
  background-color: #f0f0f7;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 5px;
`;

export const ServiceCardContainer = styled.View`
  margin-bottom: 10px;

  margin-top: 5px;
`;

export const LeftAlign = styled.View`
  margin-left: auto;
`;
