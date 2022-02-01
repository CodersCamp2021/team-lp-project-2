import { Checkbox, CheckboxGroup, Text, Flex } from '@chakra-ui/react';
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
      <Flex flexDirection="column" gap={2} pb={5}>
        <CheckboxGroup key={options} onChange={callback} p>
          {options.map((option) => (
            <Checkbox
              key={option}
              size="lg"
              colorScheme="purple"
              pl="5%"
              spacing={1}
              value={option}
            >
              {option}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Flex>
    </>
  );
}
