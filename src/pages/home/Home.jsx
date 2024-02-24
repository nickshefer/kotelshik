import React from 'react';
import Hero from './components/Hero';
import { Container } from '@chakra-ui/react';
import Catalog from './components/Catalog';

export const Home = () => {
  return (
    <>
      <Container maxW="container.lg">
        <Hero />
        <Catalog />
      </Container>
    </>
  );
};
