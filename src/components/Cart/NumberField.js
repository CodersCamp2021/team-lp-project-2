import React, { useContext } from 'react';
import { Button, Text, Flex } from '@chakra-ui/react';
import { ProductContext } from '../ProductContext';

function ButtonIncrement(props) {
  return (
    <Button
      variant="outline"
      colorScheme="purple"
      size="sm"
      style={{ marginLeft: '.5rem' }}
      onClick={props.onClickFunc}
    >
      +
    </Button>
  );
}
function ButtonDecrement(props) {
  return (
    <Button
      variant="outline"
      colorScheme="purple"
      size="sm"
      style={{ marginLeft: '.5rem' }}
      onClick={props.onClickFunc}
    >
      -
    </Button>
  );
}
function Display(props) {
  return (
    <Flex justify="center" aling="center">
      <Text
        fontWeight="semibold"
        alignSelf="center"
        px={1}
        style={{ marginLeft: '.5rem' }}
      >
        {props.message}
      </Text>
    </Flex>
  );
}
function NumberField({ amount, id }) {
  const { dispatch } = useContext(ProductContext);
  return (
    <Flex justify="center" aling="center">
      <ButtonIncrement
        onClickFunc={() =>
          dispatch({ type: 'INCREASE_PROD_AMOUNT', payload: { id: id } })
        }
      />
      <Display message={amount} />
      <ButtonDecrement
        onClickFunc={() =>
          dispatch({ type: 'DECREASE_PROD_AMOUNT', payload: { id: id } })
        }
      />
    </Flex>
  );
}
export default NumberField;
