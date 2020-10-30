import React, { useState } from "react";
import {
  Container,
  SearchHeader,
  SearchInput,
  Input,
  GoButton,
  GoButtonText,
  FilterButton,
  CardsScrollView,
  SearchCardContainer
} from "./styles";
import { StatusBar } from "react-native";
import ServiceCard from "../../components/ServiceCard";
import FilterIcon from "../../assets/icons/filter.svg";

export default () => {
  const [qty, setQty] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      <SearchHeader>
        <SearchInput>
          <Input placeholder="Procure um serviço aqui..." />

          <GoButton>
            <GoButtonText>Go!</GoButtonText>
          </GoButton>
        </SearchInput>

        <FilterButton>
          <FilterIcon height="24" width="24" fill="black" />
        </FilterButton>
      </SearchHeader>

      <CardsScrollView>
        {qty.map((q) => {
          return (
            <SearchCardContainer key={q}>
              <ServiceCard to="search" />
            </SearchCardContainer>
          );
        })}
      </CardsScrollView>
    </Container>
  );
};
