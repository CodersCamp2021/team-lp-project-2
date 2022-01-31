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

function Filters({ category }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    const params = new URLSearchParams();
    const [min, max] = details.pricing;
    const arr = details.brands || [];

    params.set('min', min);
    params.set('max', max);

    if (arr.length > 0) {
      params.set('brands', arr);
    }

    navigate(`/store${category ? `/${category}` : ''}?${params}`);
  };

  useEffect(() => {
    setDetails({ pricing: [0, 1500], brands: [] });
  }, [category]);

  return (
    <Flex
      p={3}
      w="100%"
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
          setMinPrice(val === '' ? 0 : parseInt(val));
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
          setMaxPrice(val === '' ? 0 : parseInt(val));
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
        details={details}
        setDetailsCallback={(val) => setDetails(val)}
      />
      <Button
        m={3}
        alignSelf="right"
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

export default Filters;
