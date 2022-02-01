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
      direction="column"
      justify="center"
      align="flex-start"
      w={{ base: '100%', sm: '100%', md: '250px', lg: '300px' }}
    >
      <VStack spacing={2} align="stretch" w="100%" mb="5%">
        <Text
          fontWeight="bold"
          mb={2}
          pl="2%"
          fontSize={{ base: '20px', md: '24px', lg: '30px' }}
        >
          Filters
        </Text>

        <Text
          fontSize={{ base: '16px', md: '20px', lg: '24px' }}
          pl="3%"
          pr="3%"
          fontWeight="semibold"
        >
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
          size="md"
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
          size="md"
          pl="3%"
          pb="4%"
        >
          <NumberInputField w="70%" />
        </NumberInput>

        {category ? <Divider /> : <></>}

        <Options
          category={category}
          pricing={[minPrice, maxPrice]}
          details={details}
          setDetailsCallback={(val) => setDetails(val)}
        />
        <Button
          w="50%"
          alignSelf="center"
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
