import { Link as ChakraLink, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/shoppy.png';

const Logo = ({ closeMenu }) => {
  return (
    <ChakraLink
      draggable="false"
      as={RouterLink}
      to="/"
      onClick={closeMenu}
      fontSize="xl"
    >
      <Image
        draggable="false"
        src={logo}
        alt="Logo"
        width="100px"
        minWidth="100px"
      />
    </ChakraLink>
  );
};

export default Logo;
