import React, { useEffect } from "react";
import { Container, ContentContainer, LoadingIcon } from "./styles";
import LoadingArt from "../../assets/images/loading-art.svg";
import { useNavigation } from "@react-navigation/native";

import { verifyIfIsAlreadyLogged } from "../../services/authentication";

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const isLogged = await verifyIfIsAlreadyLogged();
            console.log("load isLogged", isLogged);
            if(isLogged){
                navigation.navigate("MainTab");
            } else {
                navigation.navigate("Login");
            }
        }

        checkToken();
    }, [])

    return (
        <Container>
            <ContentContainer>
                <LoadingArt width="80%" height="160"/>
                <LoadingIcon size="large" color="#283c73"/>
            </ContentContainer>
        </Container>
    )
}