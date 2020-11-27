import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-top: ${props => props.statusBarHeigth ? `${props.statusBarHeigth + 70}px` : 0};
`;

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const TitleView = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    color: #83868d;
    font-size: 16px;
`;

export const FormGroup = styled.View`
  padding: 0 35px;
`;

export const CategoryView = styled.View`
  margin-bottom: 5px;
`;

export const InputView = styled.View`
  
`;

export const DescriptionView = styled.View`
  
`;

export const ButtonView = styled.View`
  padding: 0 35px;
  margin-top: 50px;
`;