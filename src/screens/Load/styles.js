import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #283c73;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.View`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #FFF;
    border-radius: 15px;
    width: 80%;
    justify-content: center;
    align-items: center;
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`