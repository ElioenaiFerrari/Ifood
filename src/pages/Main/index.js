import React from 'react';

import {
  Container,
  Image,
  Content,
  Header,
  Title,
  Description,
  Body,
  UnityPrice,
  UnityPriceView,
  UnityPriceTitle,
  PriceView,
  PriceTitle,
  Price,
  Footer,
  Obs,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Image />
      <Content>
        <Header>
          <Title>Pic Burger (230g)</Title>
          <Description>
            Hamburger De Picanha Com Alface Juliana, Cebola Picada, Queijo E
            Molho Especial.
          </Description>
        </Header>
        <Body>
          <UnityPriceView>
            <UnityPriceTitle>Valor Unitário</UnityPriceTitle>
            <UnityPrice>R$ 26,70</UnityPrice>
          </UnityPriceView>
          <PriceView>
            <PriceTitle>Valor</PriceTitle>
            <Price>R$ 26,70</Price>
          </PriceView>
        </Body>
        <Footer>
          <Obs />
        </Footer>
      </Content>
    </Container>
  );
}
