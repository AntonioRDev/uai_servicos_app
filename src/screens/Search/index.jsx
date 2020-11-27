import React, { useState, useCallback } from "react";
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
import {
  Searchbar,
  Paragraph,
  Button,
  List,
  Card,
  Title,
} from "react-native-paper";
import { StatusBar } from "react-native";
import ServiceCard from "../../components/ServiceCard";
import FilterIcon from "../../assets/icons/filter.svg";
import { getServices } from "../../services/service";
import { useFocusEffect } from '@react-navigation/native';
import { useGlobal } from "../../contexts/Global";

export default () => {
  const { user } = useGlobal();
  const [serviceCards, setServiceCards] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  useFocusEffect(
    useCallback(() => {
      const _getServices = async () => {
        try {
          const services = await getServices();
          const validServices = services.filter(s => s.usuarioId !== user.usuarioId);

          setServiceCards(validServices);
        } catch (error) {
          console.log("search getServices error", error);
        }
      };

      _getServices();

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      <SearchHeader>
        <SearchInput>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchInput>

        <FilterButton>
          <FilterIcon height="24" width="24" fill="black" />
        </FilterButton>
      </SearchHeader>

      <CardsScrollView>
        {serviceCards.map((serviceCard) => {
          return (
            <SearchCardContainer key={serviceCard.servicoId}>
              <Card>
                <Card.Content>
                  <List.Accordion
                    style={{ marginLeft: -15, marginTop: -10 }}
                    title={`${serviceCard.titulo}`}
                    titleStyle={{ fontSize: 20 }}
                    openMenu={true}
                  >
                    <Title style={{ fontSize: 16 }}>robertinho carlos</Title>
                    <Paragraph>{serviceCard.descricao}</Paragraph>
                  </List.Accordion>
                </Card.Content>
              </Card>
            </SearchCardContainer>
          );
        })}
      </CardsScrollView>
    </Container>
  );
};
