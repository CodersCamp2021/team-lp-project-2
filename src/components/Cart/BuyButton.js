import React from 'react';
import { Button } from '@chakra-ui/react';

function BuyButton() {
    function handleSubmit() {
      console.log('click on buy button');
    }
  
    return (
      <Button  w="20%" mt="5" colorScheme="blue" type="submit" bottom="0"
     Submit={handleSubmit}>
     Buy
      </Button>
    );
  }


  export default BuyButton;