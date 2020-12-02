import React, { useEffect } from "react";
import { Container, ContentContainer, LoadingIcon } from "./styles";
import LoadingArt from "../../assets/images/loading-art.svg";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../contexts/Global";

import { verifyIfIsAlreadyLogged } from "../../services/authentication";
import { getUserInfo } from "../../services/local-storage";

export default () => {
  const { setUser } = useGlobal();
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const isLogged = await verifyIfIsAlreadyLogged();

      if (isLogged) {
        const user = await getUserInfo();
        setUser(user);
        navigation.navigate("MainTab");
      } else {
        navigation.navigate("Login");
      }
    };

    checkToken();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <LoadingArt width="80%" height="160" />
        <LoadingIcon size="large" color="#1e387d" />
      </ContentContainer>
    </Container>
  );
};
