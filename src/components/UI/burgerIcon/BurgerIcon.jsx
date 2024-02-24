import React from 'react';
import cs from './burgerIcon.module.css';
import { Box } from '@chakra-ui/react';

export default function BurgerIcon({ show, ...props }) {
  return (
    <Box
      {...props}
      className={show ? [cs.burger, cs.active].join(' ') : cs.burger}
    >
      <span className={cs.span}></span>
    </Box>
  );
}
