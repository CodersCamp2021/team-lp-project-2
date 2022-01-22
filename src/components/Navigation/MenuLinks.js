import React from 'react';
import { Stack, Link, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const MenuLinks = ({ isMenuOpen }) => {
  return (
    <Stack
      display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      position={{
        base: 'absolute',
        md: 'static',
      }}
      width={{
        base: '100%',
        md: 'auto',
      }}
      textAlign="center"
      top="80px"
      left="0"
      gap="40px"
      pt={{ base: '40px', md: '0' }}
      pb={{ base: '40px', md: '0' }}
    >
      <Link href="/" fontSize="xl">
        Home
      </Link>
      <Link href="/" fontSize="xl">
        Store
      </Link>
      <Flex justify="center">
        <FaShoppingCart size="30px" />
      </Flex>
    </Stack>
  );
};

export default MenuLinks;
