import React from 'react';
import {
  NumberInput,
  useNumberInput,
  Button,
  Input,
  Flex,
} from '@chakra-ui/react';

function NumberField() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1.0,
      defaultValue: 0.0,
      min: 0,
      max: 100,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <NumberInput maxW="130px">
      <Flex direction="row" align="center">
        <Button ml="1" color="black" {...dec}>
          -
        </Button>
        <Input w="100px" h="40px" {...input} />
        <Button mr="1" color="black" {...inc}>
          +
        </Button>
      </Flex>
    </NumberInput>
  );
}

export default NumberField;
