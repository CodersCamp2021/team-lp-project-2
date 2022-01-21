import { Text, Link, Image, Box } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/shoppy.png'

const Logo = () => {
  return(
  <Link href="/" fontSize="xl">
    <Image src={logo} alt='Logo' width='100px' minWidth='100px'/>
  </Link>
  );
};

export default Logo;
