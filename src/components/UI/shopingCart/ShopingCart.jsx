import { Box } from '@chakra-ui/react';
import React from 'react';
import cs from './shopingCart.module.css';
import { RiShoppingCartLine } from 'react-icons/ri';

export default function ShopingCart({ amount, ...props }) {
  return (
    <Box className={cs.cart} {...props}>
      <RiShoppingCartLine size={25} className={cs.icon} />
      {amount ? <div className={cs.badge}>{amount}</div> : ''}
    </Box>
  );
}
