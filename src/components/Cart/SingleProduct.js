import React from 'react';
import {
  Flex,
  Text,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';

const SingleProduct = () => {
  return (
    <Flex justify="space-around" mb="15px">
      <Flex justify="center" direction="column">
        <Image src="" alt="image" />
      </Flex>
      <Flex direction="column" align="center" justify="space-between">
        <Flex align="center" direction="column">
          <Text fontSize="0.8vw" fontWeight="bold">
            Intel core i5
          </Text>
          <Text fontSize="0.5vw" fontWeight="bold">
            3.7ghz
          </Text>
        </Flex>
        <Flex align="center" direction="column">
          <NumberInput w="30%">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
      </Flex>

      <Flex direction="column" align="center" justify="center">
        <Flex h="2.5vw" align="center" direction="column">
          <Text fontSize="0.8vw" fontWeight="bold">
            Cena
          </Text>
        </Flex>
        <Flex h="2.5vw" align="center" direction="column">
          <FaTrashAlt fontSize="1.5vw" cursor="pointer" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingleProduct;
