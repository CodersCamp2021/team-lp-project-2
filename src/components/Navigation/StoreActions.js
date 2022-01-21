import React from 'react';
import {Stack, Box} from '@chakra-ui/react';
import SearchBar from './SearchBar';
import { FaShoppingCart } from 'react-icons/fa';

const StoreActions = () => {
  return( 
  <Stack direction="row" align="center">
    <SearchBar />
    <Box>
        <FaShoppingCart size="30px" />
    </Box>
</Stack>);
};

export default StoreActions;
