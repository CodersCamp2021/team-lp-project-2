import React from 'react';
import {
  Text,
  Flex,
  Container,
  VStack,
  StackDivider,
  Heading,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function Categories() {
  return (
    <Container maxW="15%">
      <Heading mb={1} size="lg">
        Products
      </Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={1}
        align="stretch"
        w="100%"
      >
        <Flex h="2.5vw" pl="2%" align="center">
          <ChevronRightIcon />
          <Text>All Products</Text>
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <ChevronRightIcon />
          <Text>CPU</Text>
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <ChevronRightIcon />
          <Text>GPU</Text>
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <ChevronRightIcon />
          <Text>Motherboards</Text>
        </Flex>
      </VStack>
    </Container>
  );
}
