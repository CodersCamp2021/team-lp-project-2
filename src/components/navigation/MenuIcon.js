import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

const MenuIcon = ({ isMenuOpen, openMenu, closeMenu }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={isMenuOpen ? closeMenu : openMenu}
    >
      {isMenuOpen ? (
        <CloseIcon cursor="pointer" boxSize="25px" />
      ) : (
        <HamburgerIcon cursor="pointer" boxSize="35px" />
      )}
    </Box>
  );
};

export default MenuIcon;
