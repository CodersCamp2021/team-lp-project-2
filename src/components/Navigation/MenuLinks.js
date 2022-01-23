import React from 'react';
import { Stack, Link, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useMatch } from 'react-router-dom';

const MenuLinks = ({ isMenuOpen }) => {
  const match = useMatch('/*');
  const currentPath = match.pathname;

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
      <Link href="/" fontSize="xl" color={currentPath === '/' && 'blue.400'}>
        Home
      </Link>
      <Link
        href="/store"
        fontSize="xl"
        color={currentPath === '/store' && 'blue.400'}
      >
        Store
      </Link>
      <Flex justify="center">
        <FaShoppingCart size="30px" />
      </Flex>
    </Stack>
  );
};

export default MenuLinks;
