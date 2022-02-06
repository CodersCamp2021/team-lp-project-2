import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { ProductsContex } from '../../components/ProductContex';

function DeleteButton({id}) {
  function handleSubmit() {
    dispatch({ type: 'DELETE_PROD', payload: { id: id } })
  }
  const { dispatch } = useContext(ProductsContex);
  return (
    <Button bg="inherit" color="blackAlpha.900" onClick={handleSubmit}>
      <FaTrashAlt size="20px" />
    </Button>
  );
}

export default DeleteButton;
