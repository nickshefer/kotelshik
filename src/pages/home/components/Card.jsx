import {
  Badge,
  Box,
  Button,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../components/layout/Layout';

export default function Card({ item }) {
  const { product } = useContext(Context);
  const { colorMode } = useColorMode();
  const setCartItem = item => {
    product.setCartProducts([...product.cartProducts, item]);
    sessionStorage.setItem(
      'cartItems',
      JSON.stringify([...product.cartProducts])
    );
  };
  return (
    <Box
      _hover={{ shadow: 'md' }}
      pos="relative"
      borderRadius={12}
      border="2px"
      borderColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
    >
      <Link to={`/product/${item.id}`}>
        <Image
          src={item.img}
          borderTopRadius={12}
          borderBottom="2px solid"
          borderColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
        />
        <Badge bg="gray.300" color="white" pos="absolute" top={2} right={2}>
          {product.types.find(e => e.id == item.typeId).name}
        </Badge>
      </Link>
      <Text fontWeight={600} fontSize="md" mx={4} my={2}>
        {item.name}
      </Text>
      <Text mb={2} mx={4} fontWeight="600" fontSize="xl">
        {item.price} руб.
      </Text>
      <Box mb={2} mx={4} display="flex" justifyContent="flex-end">
        <Button onClickCapture={() => setCartItem(item)} size="sm">
          Добавить в корзину
        </Button>
      </Box>
    </Box>
  );
}
