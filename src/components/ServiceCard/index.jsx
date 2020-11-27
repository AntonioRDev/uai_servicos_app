import React from "react";
import {
  Container,
  Header,
  ServiceImage,
  TitleInfos,
  Title,
  Stars,
  TitleInfosService,
  Div,
  UserName,
  Body,
  Description,
  Footer,
  DeleteButton,
  DeleteText,
  SeeMoreButton,
  SeeMoreText,
} from "./styles";
import Star from "../../assets/icons/star.svg";
import MonaLisa from "../../assets/images/mona-lisa.jpg";

export default ({ to, title, userName, description  }) => {
  return (
    <Container>
      <Header>
        <ServiceImage source={MonaLisa} />
        {to === "profile" ? (
          <>
            <TitleInfos>
              <Title>{title}</Title>

              <Stars>
                <Star height="24" width="24" fill="#FFBE23" />
                <Star height="24" width="24" fill="#FFBE23" />
                <Star height="24" width="24" fill="#FFBE23" />
                <Star height="24" width="24" fill="#FFBE23" />
                <Star height="24" width="24" fill="#FFBE23" />
              </Stars>
            </TitleInfos>
          </>
        ) : (
          <>
            <TitleInfosService>
              <Div>
                <Title>{title}</Title>

                <Stars search={to === "search"}>
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                </Stars>
              </Div>

            <UserName>{userName}</UserName>
            </TitleInfosService>
          </>
        )}
      </Header>

      {to !== "profile" && (
        <Body>
          <Description>
            {description}
          </Description>
        </Body>
      )}

      <Footer>
        {to === "profile" ? (
          <DeleteButton>
            <DeleteText>Deletar</DeleteText>
          </DeleteButton>
        ) : (
          <SeeMoreButton>
            <SeeMoreText>Veja Mais...</SeeMoreText>
          </SeeMoreButton>
        )}
      </Footer>
    </Container>
  );
};
