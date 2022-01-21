import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import StoreActions from './StoreActions';


const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      gap="20px"
      pl="80px"
      pr="80px"
      width="100%"
      height="80px"
    >
      <Logo />
      <MenuLinks />
      <StoreActions />
    </Flex>
  );
};

export default Navbar;
