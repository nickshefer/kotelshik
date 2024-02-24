import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Context } from '../../components/layout/Layout';

export default function Cart() {
  const { product } = useContext(Context);
  const sum = product.cartProducts.reduce((sum, e) => (sum += e.price), 0);
  return (
    <Container maxW="container.lg">
      <Heading textAlign="center" my={4} as="h1">
        Корзина
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Изображение</Th>
            <Th>Название товара</Th>
            <Th>цена</Th>
          </Tr>
        </Thead>
        <Tbody>
          {product.cartProducts.map(i => (
            <Tr key={i.id}>
              <Td>
                <Image src={i.img} w="80px" />
              </Td>
              <Td>{i.fullname}</Td>
              <Td>{i.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {product.cartProducts.length != 0 ? (
        <VStack mt={4}>
          <Text fontSize="xl">
            Итого:{' '}
            <Text display="inline" as="b">
              {sum}
            </Text>{' '}
            рублей
          </Text>
          <Button colorScheme="green">Оформить заказ</Button>
        </VStack>
      ) : (
        <Text mt={4} textAlign="center">
          Корзина пуста
        </Text>
      )}
    </Container>
  );
}
