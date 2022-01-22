import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Text, Flex, Box, VStack, StackDivider, Link } from '@chakra-ui/react';
import { FaAngleRight, FaDesktop, FaMemory } from 'react-icons/fa';
import { BsCpu, BsCpuFill } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';

export default function Categories() {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get('cat');

  return (
    <Box w="15%" bg="#f1f1f1">
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
          <TiThSmall size="1.5vw" />
          <Link
            fontSize="1.2vw"
            pl="3%"
            pr="3%"
            fontWeight={cat ? 'regular' : 'bold'}
            href="/store"
          >
            All products
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpu size="1.5vw" />
          <Link
            fontSize="1.2vw"
            pl="3%"
            pr="3%"
            fontWeight={cat === 'cpu' ? 'bold' : 'regular'}
            href="/store?cat=cpu"
          >
            CPUs
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaMemory size="1.5vw" />
          <Link
            fontSize="1.2vw"
            pl="3%"
            pr="3%"
            fontWeight={cat === 'ram' ? 'bold' : 'regular'}
            href="/store?cat=ram"
          >
            Memory
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaDesktop size="1.5vw" />
          <Link
            fontSize="1.2vw"
            pl="3%"
            pr="3%"
            fontWeight={cat === 'monitor' ? 'bold' : 'regular'}
            href="/store?cat=monitor"
          >
            Monitors
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpuFill size="1.5vw" />
          <Link
            fontSize="1.2vw"
            pl="3%"
            pr="3%"
            fontWeight={cat === 'gpu' ? 'bold' : 'regular'}
            href="/store?cat=gpu"
          >
            Graphics Cards
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
      </VStack>
    </Box>
  );
}


