import { Box, Center, Container } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Box as="footer" mt={4} bg="gray.900" color="white">
      <Container maxW="container.lg">
        <Center fontSize="sm" h="100px">
          © {new Date().getFullYear()} / ООО "Котельщик"
        </Center>
      </Container>
    </Box>
  );
}
