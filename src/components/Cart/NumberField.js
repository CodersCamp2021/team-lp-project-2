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
        <Button w="15px" h="20px" mr="1" color="black" {...inc}>
          +
        </Button>
        <Input w="100px" h="40px" {...input} />
        <Button w="15px" h="20px" ml="1" color="black" {...dec}>
          -
        </Button>
      </Flex>
    </NumberInput>
  );
}

export default NumberField;
