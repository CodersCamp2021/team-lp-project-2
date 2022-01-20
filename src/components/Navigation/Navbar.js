import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { FaShoppingCart } from 'react-icons/fa';

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
      <Stack direction="row" gap="30px">
        <Link href="/" fontSize="xl">
          Home
        </Link>
        <Link href="/" fontSize="xl">
          Store
        </Link>
      </Stack>
      <Stack direction="row" align="center">
        <SearchBar />
        <Box>
          <FaShoppingCart size="30px" />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navbar;
