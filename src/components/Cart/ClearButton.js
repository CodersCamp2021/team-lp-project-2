import React from 'react';
import { Button } from '@chakra-ui/react';


function ClearButton() {
    function handleSubmit() {
      ;
      console.log('click on clear button');
    }
  
    return (
      <Button w="20%" mt="25" colorScheme="teal"
      type="submit" onSubmit={handleSubmit}>
      Clear cart
      </Button>
    );
  }


  
export default ClearButton;


