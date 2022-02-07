import React, { useContext } from 'react';
import {
  Stack,
  Flex,
  Link as ChakraLink,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useMatch, Link as RouterLink } from 'react-router-dom';
import { ProductContext } from '../ProductContext';

const MenuLinks = ({ isMenuOpen, openCart, closeMenu }) => {
  const { state } = useContext(ProductContext);
  const match = useMatch('/*');
  const currentPath = match.pathname;

  const amountOfProducts = state.products.reduce(
    (acc, curr) => (acc += curr.amount),
    0,
  );

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
        onClick={closeMenu}
        as={RouterLink}
        to="/"
        fontSize="xl"
        color={currentPath === '/' && 'purple.500'}
      >
        Home
      </ChakraLink>
      <ChakraLink
        onClick={closeMenu}
        as={RouterLink}
        to="/store"
        fontSize="xl"
        color={currentPath.includes('store') && 'purple.500'}
      >
        Store
      </ChakraLink>
      <Flex
        justify="center"
        position="relative"
        cursor="pointer"
        onClick={() => {
          closeMenu();
          openCart();
        }}
      >
        <FaShoppingCart data-testid="cartIcon" size="30px" />
        {amountOfProducts > 0 && (
          <Flex
            justify="center"
            align="center"
            position="absolute"
            right={{ base: '50%', md: '0' }}
            bottom="0"
            transform={{
              base: 'translate(100%, 60%)',
              md: 'translate(60%, 60%)',
            }}
            width="30px"
            height="30px"
            zIndex="1000"
            bg="purple.500"
            color="whiteAlpha.900"
            borderRadius="50%"
          >
            <Text>{amountOfProducts}</Text>
          </Flex>
        )}
      </Flex>
    </Stack>
  );
};

export default MenuLinks;
