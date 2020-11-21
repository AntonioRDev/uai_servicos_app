import React, { useEffect } from "react";
import { Container, ContentContainer, LoadingIcon } from "./styles";
import LoadingArt from "../../assets/images/loading-art.svg";
import { useNavigation } from "@react-navigation/native";

import { getToken } from "../../services/local-storage";

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await getToken();
            
            if(token){
                // validar
            } else {
                navigation.navigate("Login");
            }
        }

        checkToken()
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