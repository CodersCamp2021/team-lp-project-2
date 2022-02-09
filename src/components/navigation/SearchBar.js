import React from 'react';
import { Button, Flex, FormControl } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import SearchCombobox from './SearchCombobox';

const SearchBar = ({ isMenuOpen }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;

    if (!name) return;

    navigate(`/store?name=${name}`);

    e.target.reset();
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
        <FormControl
          display="flex"
          mx="auto"
          maxWidth="600px"
          maxHeight="40px"
          align="center"
        >
          <SearchCombobox />
          <Button
            placeSelf="center"
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
