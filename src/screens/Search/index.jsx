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
  TextL,
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
import { useFocusEffect } from "@react-navigation/native";
import { useGlobal } from "../../contexts/Global";
import { showToast, hideToast } from "../../services/util";
import { getUserById } from "../../services/user";
import { event } from "react-native-reanimated";

export default () => {
  const { user } = useGlobal();
  const [serviceCards, setServiceCards] = useState([]);
  const [serviceFilterCards, setServiceFilterCards] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => {
    console.log(query);
    console.log(serviceCards);
    if (query || query != "" || query != " ") {
      setServiceFilterCards(
        serviceCards.filter(
          (el) => el.titulo.toLowerCase().indexOf(query.toLowerCase()) > -1
        )
      );
    } else {
      setServiceFilterCards(serviceCards);
    }
    setSearchQuery(query);
  };

  useFocusEffect(
    useCallback(() => {
      const _getServices = async () => {
        try {
          showToast("info", "Carregando serviços.");
          setServiceCards([]);

          const services = await getServices();
          const validServices = services.filter(
            (s) => s.usuarioId !== user.usuarioId
          );
          const updatedServices = await addUserInfoToServices(validServices);

          setServiceCards(updatedServices);
          setServiceFilterCards(updatedServices);

          hideToast();
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

  const addUserInfoToServices = async (services) => {
    const servicesWithUserInfo = [];

    for (const service of services) {
      try {
        const userInfo = await getUserById(service.usuarioId);
        const updatedService = { ...service };
        delete updatedService.usuarioId;

        updatedService.usuario = userInfo;
        servicesWithUserInfo.push(updatedService);
      } catch (error) {
        console.log("addUserInfoToServices error", error);
        showToast("error", "Erro ao buscar serviços.");
        return [];
      }
    }

    return servicesWithUserInfo;
  };

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      <TextL>
        Pesquisa aqui os {"\n"}
        melhores serviços
      </TextL>
      <SearchHeader>
        <SearchInput>
          <Searchbar
            placeholder="Pesquise aqui"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ width: 300, height: 50 }}
          />
        </SearchInput>

        <FilterButton>
          <FilterIcon height="24" width="24" fill="white" />
        </FilterButton>
      </SearchHeader>

      <SearchCardContainer>
        <ServiceCard
          title={`xistose`}
          userName={`description`}
          description={`description`}
          qtd={5}
          km={10}
        ></ServiceCard>
      </SearchCardContainer>

      <CardsScrollView>
        {serviceFilterCards.map((serviceCard) => {
          return (
            <SearchCardContainer key={serviceCard.servicoId}>
              <ServiceCard
                title={`${serviceCard.titulo}`}
                userName={`${serviceCard.usuario.nome}`}
              ></ServiceCard>
            </SearchCardContainer>
          );
        })}
      </CardsScrollView>
    </Container>
  );
};
