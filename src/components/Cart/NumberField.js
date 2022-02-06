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
function NumberField() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  const { dispatch } = useContext(ProductsContex);

  return (
    <div>
      <ButtonIncrement onClickFunc={() => dispatch()} />
      <Display message={'eeee'} />
      <ButtonDecrement onClickFunc={console.log('-')} />
    </div>
  );
}
export default NumberField;
