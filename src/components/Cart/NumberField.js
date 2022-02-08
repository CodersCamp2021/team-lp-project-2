import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { ProductContext } from '../ProductContext';

function ButtonIncrement(props) {
  return (
    <Button mx=".5rem" onClick={props.onClickFunc}>
      +
    </Button>
  );
}
function ButtonDecrement(props) {
  return (
    <Button mx=".5rem" onClick={props.onClickFunc}>
      -
    </Button>
  );
}
function Display(props) {
  return <label mx=".5rem">{props.message}</label>;
}
function NumberField({ amount, id }) {
  const { dispatch } = useContext(ProductContext);
  return (
    <div>
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
    </div>
  );
}
export default NumberField;
