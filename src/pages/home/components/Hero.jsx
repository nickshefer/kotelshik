import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import heroImg from '../../../assets/hero.webp';

export default function Hero() {
  return (
    <Box
      as="section"
      h="400px"
      mt={4}
      bgImage={heroImg}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      rounded={12}
    >
      <Flex
        w="100%"
        h="100%"
        bgColor="rgb(0, 0, 0, 0.7)"
        rounded="inherit"
        alignItems="center"
      >
        <Heading
          w={{ base: '100%', md: '70%' }}
          mx="auto"
          px={5}
          as="h1"
          className="hero-title"
          textColor={'white'}
          textAlign="center"
        >
          Продажа, монтаж, обслуживание газовых котлов по Томской области
        </Heading>
      </Flex>
    </Box>
  );
}
