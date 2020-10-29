import React from 'react'
import { Container, TabItem } from "./styles";

import ProfileIcon from "../../assets/icons/profile.svg";
import SearchIcon from "../../assets/icons/search.svg";
import PlusIcon from "../../assets/icons/plus.svg";

export default ({ state, navigation }) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <Container>
            <TabItem active={state.index === 0} onPress={() => goTo("Profile")}>
                <ProfileIcon height="24" width="24" fill="#FFFFFF"/>
            </TabItem>
            
            <TabItem active={state.index === 1} onPress={() => goTo("Search")}>
                <SearchIcon height="24" width="24" fill="#FFFFFF"/>
            </TabItem>

            <TabItem active={state.index === 2} onPress={() => goTo("NewService")}>
                <PlusIcon height="24" width="24" fill="#FFFFFF"/>
            </TabItem>
        </Container>
    )
}
