import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { MenuItem } from './MenuItem';

export default function DrawerMenu({ isOpen, onClose }) {
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Меню</DrawerHeader>
        <DrawerBody>
          <MenuItem onClick={onClose} to="/services">
            Услуги
          </MenuItem>
          <MenuItem onClick={onClose} to="/contacts">
            Контакты
          </MenuItem>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
