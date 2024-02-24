import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../components/layout/Layout';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import ImageModal from './ImageModal';

export default function ProductPage() {
  const navigate = useNavigate();
  const { product } = useContext(Context);
  const { pathname } = useLocation();
  const item = product.products.find(e => e.id == pathname.match(/\d+/)[0]);
  return (
    <Container maxW="container.lg">
      <Heading my={4} textAlign="center" as="h1">
        {item.fullname}
      </Heading>
      <Divider />
      <Flex
        mt={4}
        gap={4}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ base: 'center' }}
      >
        <ImageModal src={item.img} />
        <Box>
          <Text>{item.name}</Text>
          <UnorderedList>
            <ListItem>
              Производитель: <strong>Kentatsu</strong>
            </ListItem>
            <ListItem>
              Страна производства: <strong>Китай</strong>
            </ListItem>
          </UnorderedList>
          <Divider mt={4} />
          <Text>
            цена:{' '}
            <span style={{ fontSize: '30px', fontWeight: 600 }}>
              {item.price}
            </span>{' '}
            рублей
          </Text>
          <Button colorScheme="green" w="100%" mt={4}>
            Купить
          </Button>
        </Box>
      </Flex>
      <Divider my={4} />
      <Text>{item.description}</Text>
      <Heading as="h6" mt={2} fontSize="xl" textAlign="center">
        Технические характеристики
      </Heading>
      <Table variant="simple">
        <Tbody>
          {item.info.map(i => (
            <Tr key={i.title}>
              <Td>{i.title}</Td>
              <Td>{i.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
