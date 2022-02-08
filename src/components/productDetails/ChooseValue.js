import { useNumberInput, Input, Button, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function ChooseValue({ setNoOfProducts }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 9,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  useEffect(() => {
    setNoOfProducts(input.value);
  });

  return (
    <HStack maxW="150px">
      <Button variant="outline" colorScheme="purple" size="sm" {...inc}>
        +
      </Button>
      <Input {...input} w="45px" />
      <Button variant="outline" colorScheme="purple" size="sm" {...dec}>
        -
      </Button>
    </HStack>
  );
}
