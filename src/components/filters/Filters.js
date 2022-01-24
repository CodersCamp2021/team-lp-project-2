import React, { useEffect, useState } from 'react';
import { BsCheckAll } from 'react-icons/bs';
import Options from './Options';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Text,
  Divider,
  NumberInput,
  NumberInputField,
  Button,
} from '@chakra-ui/react';

export default function Filters({ products, category }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [state, setState] = useState({});
  const navigate = useNavigate();

  console.log(state);

  const handleSubmit = () => {
    const params = new URLSearchParams();
    const [min, max] = state.pricing;
    const arr = state.brands || [];

    params.set('min', min);
    params.set('max', max);

    if (arr.length > 0) {
      params.set('brand', arr);
    }

    navigate(`store${category ? '/' + category : ''}?${params}`);
  };

  useEffect(() => {
    setState({ pricing: [minPrice, maxPrice], brands: [] });
  }, [category]);

  return (
    <Flex
      p={3}
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

      <Text pl="3%" color="gray.500">
        Minimum price:
      </Text>
      <NumberInput
        onChange={(val) => {
          setMinPrice(val === '' ? 0 : val);
        }}
        defaultValue={0}
        min={0}
        max={maxPrice}
        size="sm"
      >
        <NumberInputField />
      </NumberInput>

      <Text pl="3%" color="gray.500">
        Maximum price:
      </Text>
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
      <Options
        category={category}
        pricing={[minPrice, maxPrice]}
        state={state}
        setStateCallback={(val) => setState(val)}
      />
      <Button
        m={3}
        alignSelf="center"
        variant="outline"
        colorScheme="red"
        rightIcon={<BsCheckAll />}
        onClick={handleSubmit}
      >
        Apply
      </Button>
    </Flex>
  );
}
