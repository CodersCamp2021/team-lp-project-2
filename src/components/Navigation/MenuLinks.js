import React from 'react';
import {
  Stack,
  Flex,
  Link as ChakraLink,
  StackDivider,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useMatch, Link as RouterLink } from 'react-router-dom';

const MenuLinks = ({ isMenuOpen, openCart }) => {
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
      gap="10px"
      pt={{ base: '40px', md: '0' }}
      pb={{ base: '40px', md: '0' }}
      bg="#f1f1f1"
      borderBottom={{ base: '1px solid #ccc', md: 'none' }}
      divider={
        <StackDivider borderColor="gray.300" w="80%" alignSelf="center" />
      }
    >
      <ChakraLink
        as={RouterLink}
        to="/"
        fontSize="xl"
        color={currentPath === '/' && 'blue.400'}
      >
        Home
      </ChakraLink>
      <ChakraLink
        as={RouterLink}
        to="/store"
        fontSize="xl"
        color={currentPath === '/store' && 'blue.400'}
      >
        Store
      </ChakraLink>
      <Flex justify="center">
        <FaShoppingCart
          cursor="pointer"
          data-testid="cartIcon"
          size="30px"
          onClick={openCart}
        />
      </Flex>
    </Stack>
  );
};

export default MenuLinks;
