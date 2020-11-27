import React, { useState, useEffect } from "react";
import {
  Container,
  SearchHeader,
  SearchInput,
  Input,
  GoButton,
  GoButtonText,
  FilterButton,
  CardsScrollView,
  SearchCardContainer,
} from "./styles";
import { StatusBar } from "react-native";
import ServiceCard from "../../components/ServiceCard";
import FilterIcon from "../../assets/icons/filter.svg";
import { getServices } from "../../services/service";

export default () => {
  const [serviceCards, setServiceCards] = useState([]);

  useEffect(() => {
    const _getServices = async () => {
      try {
        const services = await getServices();
        setServiceCards(services);
      } catch (error) {
        console.log("search getServices error", error);
      }
    };

    _getServices();
  }, []);

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
        {serviceCards.map((serviceCard) => {
          return (
            <SearchCardContainer key={serviceCard.servicoId}>
              <ServiceCard
                to="search"
                title={serviceCard.titulo}
                userName={serviceCard.usuarioId}
                description={serviceCard.descricao}
              />
            </SearchCardContainer>
          );
        })}
      </CardsScrollView>
    </Container>
  );
};
