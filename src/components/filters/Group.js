import { Checkbox, CheckboxGroup, Text } from '@chakra-ui/react';
import React from 'react';

export default function Group({ title, options, callback }) {
  return (
    <>
      <Text fontSize="1.5vw" pl="3%" pr="3%">
        {title}
      </Text>
      <CheckboxGroup key={options} onChange={callback}>
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
