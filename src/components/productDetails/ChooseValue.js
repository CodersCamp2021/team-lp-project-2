import { useNumberInput, Input, Button, HStack } from '@chakra-ui/react';

export default function ChooseValue() {
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

  return (
    <HStack maxW="150px">
      <Button {...inc}>+</Button>
      <Input {...input} w="45px" />
      <Button {...dec}>-</Button>
    </HStack>
  );
}
