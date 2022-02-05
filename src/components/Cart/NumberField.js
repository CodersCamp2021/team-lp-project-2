import React from 'react';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useProduct, useProductUpdate } from '../../components/ProductContex';

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

  const test = useProduct();
  const changeTest = useProductUpdate();
  const testFunc = (test) => test - 1;
  return (
    <div>
      <ButtonIncrement onClickFunc={changeTest} />
      <Display message={test} />
      <ButtonDecrement onClickFunc={testFunc(test)} />
    </div>
  );
}
export default NumberField;
