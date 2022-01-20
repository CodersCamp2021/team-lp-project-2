import { Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import React from 'react';

const SearchBar = () => {
  return (
    <Flex align="center">
      <Input maxWidth="500px" minWidth="100px" />
      <SearchIcon position="relative" right="35px" boxSize="25px" />
    </Flex>
  );
};

export default SearchBar;
