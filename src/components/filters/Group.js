import { Checkbox, CheckboxGroup, Text } from '@chakra-ui/react';
import React from 'react';

export default function Group({ title, options, callback }) {
  return (
    <>
      <Text p="3%" fontSize="xl">
        {title}
      </Text>
      <CheckboxGroup onChange={callback}>
        {options.map((option) => (
          <Checkbox
            key={option}
            size="lg"
            colorScheme="red"
            pl="5%"
            spacing={1}
            value={option}
          >
            {option}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </>
  );
}
