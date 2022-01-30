import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';


function DeleteButton() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('click on delete button');
    }
  
    return (
      <Button 
      rightIcon= {<FaTrashAlt />} colorScheme="white" Submit={handleSubmit}>
      </Button>
    );
  }


  export default DeleteButton;
