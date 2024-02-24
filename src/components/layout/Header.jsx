import { Box, Container, Flex, Image, useDisclosure } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import BurgerIcon from '../UI/burgerIcon/BurgerIcon';
import ShopingCart from '../UI/shopingCart/ShopingCart';
import { MenuItem } from './MenuItem';
import DrawerMenu from './DrawerMenu';
import { Context } from './Layout';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const { product } = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box as="header" bg="gray.700" pos="fixed" w="100%" zIndex={2}>
      <Container maxW="container.lg">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          py={2}
          color="white"
        >
          <Flex
            align="center"
            gap={4}
            mr={{ md: '5' }}
            width={{ base: '100%', md: 'auto' }}
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
          >
            <Link to="/">
              <Image w="150px" src={logo} alt="logo" />
            </Link>

            <Box flexGrow={1} display={{ base: 'block', md: 'none' }}>
              <ShopingCart
                amount={product.cartProducts.length}
                onClick={() => navigate('/cart')}
              />
            </Box>

            <BurgerIcon
              onClick={onOpen}
              display={{ sm: 'block', md: 'none' }}
            />
            <DrawerMenu isOpen={isOpen} onClose={onClose} />
          </Flex>

          <Box
            display={{ base: 'none', md: 'flex' }}
            justifyContent={{ md: 'flex-end' }}
            gap={{ md: '4' }}
            width={{ base: '100%', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
          >
            <MenuItem to="/services">Услуги</MenuItem>
            <MenuItem to="/contacts">Контакты</MenuItem>
            <Box>
              <ShopingCart
                amount={product.cartProducts.length}
                onClick={() => navigate('/cart')}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
});
