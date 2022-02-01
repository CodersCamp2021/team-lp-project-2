import React from 'react';
import { Text, Flex, Box, VStack, StackDivider, Link } from '@chakra-ui/react';
import { FaAngleRight, FaDesktop, FaMemory } from 'react-icons/fa';
import { BsCpu, BsCpuFill } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';
import { MdDeveloperBoard } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

const Categories = ({ category }) => {
  return (
    <Box w={{ base: '100%', sm: '100%', md: '250px', lg: '300px' }}>
      <Text
        fontWeight="bold"
        mb={2}
        pl="2%"
        fontSize={{ base: '20px', md: '24px', lg: '30px' }}
      >
        Products
      </Text>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={2}
        align="stretch"
        w="100%"
        mb="3%"
      >
        <Flex h="2.5vw" pl="2%" align="center">
          <TiThSmall size="2.2vw" />
          <Link
            as={RouterLink}
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            pl="3%"
            pr="3%"
            fontWeight={category ? 'regular' : 'bold'}
            to="/store"
          >
            All products
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpu size="2.2vw" />
          <Link
            as={RouterLink}
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            pl="3%"
            pr="3%"
            fontWeight={category === 'cpu' ? 'bold' : 'regular'}
            to="/store/cpu"
          >
            CPUs
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaMemory size="2.2vw" />
          <Link
            as={RouterLink}
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            pl="3%"
            pr="3%"
            fontWeight={category === 'ram' ? 'bold' : 'regular'}
            to="/store/ram"
          >
            Memory
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaDesktop size="2.2vw" />
          <Link
            as={RouterLink}
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            pl="3%"
            pr="3%"
            fontWeight={category === 'monitor' ? 'bold' : 'regular'}
            to="/store/monitor"
          >
            Monitors
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpuFill size="2.2vw" />
          <Link
            as={RouterLink}
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            pl="3%"
            pr="3%"
            fontWeight={category === 'gpu' ? 'bold' : 'regular'}
            to="/store/gpu"
          >
            Graphics Cards
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <MdDeveloperBoard size="2.2vw" />
          <Link
            as={RouterLink}
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            pl="3%"
            pr="3%"
            fontWeight={category === 'motherboard' ? 'bold' : 'regular'}
            to="/store/motherboard"
          >
            Motherboards
          </Link>
          <FaAngleRight size="1.2vw" />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Categories;
