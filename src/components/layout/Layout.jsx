import { Box, ChakraProvider, Flex, VStack, theme } from '@chakra-ui/react';
import React, { createContext } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import ProductStore from '../../store/ProductStore';

export const Context = createContext(null);

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ product: new ProductStore() }}>
        <BrowserRouter>
          <Flex flexDirection="column" h="100vh">
            <Header />
            <Box pt={12} as="main" flexGrow="1">
              {children}
            </Box>
            <Footer />
          </Flex>
        </BrowserRouter>
      </Context.Provider>
    </ChakraProvider>
  );
}
