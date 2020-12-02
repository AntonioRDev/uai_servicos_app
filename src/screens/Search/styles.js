import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${(props) =>
    props.statusBarHeigth ? `${props.statusBarHeigth + 30}px` : 0};
  padding-left: 15px;
  padding-right: 15px;
  background-color: #264aab;
`;

export const TextL = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const SearchHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const SearchInput = styled.View`
  flex-direction: row;
  width: 80%;
`;

export const Input = styled.TextInput`
  border: 1px solid #d9d9d9;
  padding: 1px;
  padding-left: 15px;
`;

export const GoButton = styled.TouchableHighlight`
  justify-content: center;
  border: 1px solid #d9d9d9;
  border-left-width: 0;
  padding: 0 15px;
  border-radius: 3px;
`;

export const GoButtonText = styled.Text``;

export const FilterButton = styled.TouchableHighlight`
  justify-content: center;
`;

export const CardsScrollView = styled.ScrollView``;

export const SearchCardContainer = styled.View`
  margin-bottom: 10px;
`;
