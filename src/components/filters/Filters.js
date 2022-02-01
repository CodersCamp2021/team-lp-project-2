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
  VStack,
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
      bg="green"
      w="100%"
      direction="column"
      justify="center"
      align="flex-start"
    >
      <VStack spacing={2} align="stretch" w="100%">
        <Text fontWeight="bold" mb={2} pl="2%" fontSize="2xl">
          Filters
        </Text>

        <Text fontSize="1.5vw" pl="3%" pr="3%" fontWeight="semibold">
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
          pl="3%"
        >
          <NumberInputField w="70%" />
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
          pl="3%"
        >
          <NumberInputField w="70%" />
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
      </VStack>
    </Flex>
  );
}

export default Filters;
