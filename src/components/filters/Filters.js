import React, { useState } from 'react';
import Options from './Options';
import {
  Flex,
  Text,
  Divider,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

export default function Filters({ products, category }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);

  return (
    <Flex
      p={5}
      w="20%"
      bg="#f1f1f1"
      direction="column"
      justify="center"
      align="flex-start"
    >
      <Text pl="2%" fontSize="2xl" fontWeight="bold">
        Filters
      </Text>
      <Text p="3%" fontSize="xl">
        Price
      </Text>

      <Text pl="3%">Minimum price:</Text>
      <NumberInput
        onChange={(val) => {
          setMinPrice(val === '' ? 0 : val);
        }}
        defaultValue={0}
        min={0}
        max={1500}
        size="sm"
      >
        <NumberInputField />
      </NumberInput>

      <Text pl="3%">Maximum price:</Text>
      <NumberInput
        onChange={(val) => {
          setMaxPrice(val === '' ? 0 : val);
        }}
        defaultValue={1500}
        min={minPrice}
        max={1500}
        size="sm"
      >
        <NumberInputField />
      </NumberInput>

      <Divider />
      <Options category={category} pricing={[minPrice, maxPrice]} />
    </Flex>
  );
}
