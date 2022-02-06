import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { ProductsContex } from '../../components/ProductContex';

function ButtonIncrement(props) {
  return (
    <Button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
      +
    </Button>
  );
}
function ButtonDecrement(props) {
  return (
    <Button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
      -
    </Button>
  );
}
function Display(props) {
  return <label style={{ marginLeft: '.5rem' }}>{props.message}</label>;
}
function NumberField({ amount, id }) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  const { state, dispatch } = useContext(ProductsContex);
  return (
    <div>
      <ButtonIncrement
        onClickFunc={() =>
          dispatch({ type: 'INCREASE_PROD_AMOUNT', payload: { id: id } })
        }
      />
      <Display message={amount} />
      <ButtonDecrement onClickFunc={() => 
        dispatch({ type: 'DECREASE_PROD_AMOUNT', payload: { id: id } })
        } 
      />
    </div>
  );
}
export default NumberField;
