import React from 'react';
import {
  Text,
  Flex,
  Container,
  VStack,
  StackDivider,
  Link,
} from '@chakra-ui/react';
import { FaAngleRight, FaDesktop, FaMemory } from 'react-icons/fa';
import { BsCpu, BsCpuFill } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';

export default function Categories() {
  return (
    <Container maxW="12%">
      <Text fontWeight="bold" pl="2%" fontSize="1.5vw">
        Products
      </Text>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={1}
        align="stretch"
        w="100%"
      >
        <Flex h="2.5vw" pl="2%" align="center">
          <TiThSmall size="1.5rem" />
          <Link fontSize="1.2rem" pl="3%" pr="3%" href="/store">
            All products
          </Link>
          <FaAngleRight />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpu size="1.5rem" />
          <Link fontSize="1.2rem" pl="3%" pr="3%" href="/store?cat=cpu">
            CPUs
          </Link>
          <FaAngleRight />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaMemory size="1.5rem" />
          <Link fontSize="1.2rem" pl="3%" pr="3%" href="/store?cat=ram">
            Memory
          </Link>
          <FaAngleRight />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaDesktop size="1.5rem" />
          <Link fontSize="1.2rem" pl="3%" pr="3%" href="/store?cat=monitor">
            Monitors
          </Link>
          <FaAngleRight />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpuFill size="1.5rem" />
          <Link fontSize="1.2rem" pl="3%" pr="3%" href="/store?cat=gpu">
            Graphics Cards
          </Link>
          <FaAngleRight />
        </Flex>
      </VStack>
    </Container>
  );
}
