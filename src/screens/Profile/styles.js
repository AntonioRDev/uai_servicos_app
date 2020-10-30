import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${props => props.statusBarHeigth ? `${props.statusBarHeigth + 15}px` : 0};
  background-color: white;
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
  background-color: #EBEBEB;
  flex: 1;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #283c73;
  font-weight: bold;
`;

export const AddServiceButton = styled.View`
  
`;

export const CardsScrollView = styled.ScrollView`
  padding: 0 8px;
`;

export const ServiceCardContainer = styled.View`
    margin-bottom: 10px;
`