import { Checkbox, CheckboxGroup, Text } from '@chakra-ui/react';
import React from 'react';

export default function Group({ title, options, callback }) {
  return (
    <>
      <Text
        fontWeight="semibold"
        fontSize={{ base: '16px', md: '20px', lg: '24px' }}
        pl="3%"
      >
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
