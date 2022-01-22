import { Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import React from 'react';

const SearchBar = ({ isMenuOpen }) => {
  return (
    <Flex
      display={{ base: isMenuOpen ? 'none' : 'flex', md: 'flex' }}
      align="center"
      justify="center"
      position={{
        base: 'absolute',
        md: 'static',
      }}
      width={{
        base: '100%',
        md: 'auto',
      }}
      top="80px"
      left="12px"
      pt={{ base: '40px', md: '0' }}
      pb={{ base: '40px', md: '0' }}
    >
      <Input
        maxWidth="500px"
        minWidth="100px"
        borderColor="blackAlpha.500"
        focusBorderColor="blackAlpha.900"
      />
      <SearchIcon position="relative" right="36px" boxSize="25px" />
    </Flex>
  );
};

export default SearchBar;
