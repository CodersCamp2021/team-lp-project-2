import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ isMenuOpen }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;

    if (!name) return;

    navigate(`/store?name=${name}`);
  };

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
      <form onSubmit={handleSubmit}>
        <FormControl display="flex">
          <Input
            maxWidth="500px"
            minWidth="100px"
            borderColor="blackAlpha.500"
            focusBorderColor="blackAlpha.900"
            borderRadius="20px"
          />
          <Button
            type="submit"
            bg="none"
            _hover={{ bg: 'inherit' }}
            _active={{ bg: 'inherit' }}
          >
            <SearchIcon boxSize="25px" />
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default SearchBar;
