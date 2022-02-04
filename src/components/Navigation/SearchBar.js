import React, { useEffect, useState } from 'react';
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ isMenuOpen }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;

    if (!name) return;

    navigate(`/store?name=${name}`);

    e.target.reset();
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Flex
      flexGrow="2"
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
      left="0"
      pt={{ base: '40px', md: '0' }}
      pb={{ base: '40px', md: '0' }}
    >
      <form onSubmit={handleSubmit} style={{ width: '90%' }}>
        <FormControl display="flex" mx="auto" maxWidth="600px">
          <Input
            onChange={handleChange}
            borderColor="blackAlpha.500"
            focusBorderColor="blackAlpha.900"
            borderRadius="20px"
            placeholder="Search for products..."
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
