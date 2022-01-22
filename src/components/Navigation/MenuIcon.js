import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

const MenuIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Box onClick={toggleMenu}>
      {isMenuOpen ? (
        <CloseIcon boxSize="25px" />
      ) : (
        <HamburgerIcon boxSize="35px" />
      )}
    </Box>
  );
};

export default MenuIcon;
