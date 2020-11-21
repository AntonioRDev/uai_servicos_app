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

export default ({ to }) => {
  return (
    <Container>
      <Header>
        <ServiceImage source={MonaLisa} />
        {to === "profile" ? (
          <>
            <TitleInfos>
              <Title>Pintura</Title>

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
                <Title>Pintura</Title>

                <Stars search={to === "search"}>
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                  <Star height="24" width="24" fill="#FFBE23" />
                </Stars>
              </Div>

              <UserName>Fidalgo da Silva</UserName>
            </TitleInfosService>
          </>
        )}
      </Header>

      {to !== "profile" && (
        <Body>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor
            sed eleifend tristique, tortor mauris molestie elit, et lacinia
            ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium
            sit amet quis magna. Aenean velit odio, elementum in tempus ut,
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
