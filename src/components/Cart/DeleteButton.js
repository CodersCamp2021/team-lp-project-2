import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';

function DeleteButton() {
  function handleSubmit() {
    console.log('click on delete button');
  }

  return (
    <Button bg="inherit" color="blackAlpha.900" onClick={handleSubmit}>
      <FaTrashAlt size="20px" />
    </Button>
  );
}

export default DeleteButton;
