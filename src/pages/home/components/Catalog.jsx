import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { Context } from '../../../components/layout/Layout';

export default function Catalog() {
  const { product } = useContext(Context);
  useEffect(() => {
    product.setCartProducts(
      JSON.parse(sessionStorage.getItem('cartItems')) || []
    );
  }, [product.cartProducts]);
  return (
    <Box as="section" mt={8}>
      <Heading textAlign="center" as="h2">
        Каталог
      </Heading>
      <SimpleGrid mt={4} columns={[1, 2, 3]} gap={5}>
        {product.products.map(product => (
          <Card key={product.id} item={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
