import React from 'react';
import { Text, Flex, Box, VStack, StackDivider } from '@chakra-ui/react';
import { FaAngleRight, FaDesktop, FaMemory } from 'react-icons/fa';
import { BsCpu, BsCpuFill } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';
import { MdDeveloperBoard } from 'react-icons/md';
import { NavLink} from 'react-router-dom';

const Categories = ({ category }) => {
  return (
    <Box w="20%" bg="#f1f1f1" p={3}>
      <Text fontWeight="bold" mb={2} pl="2%" fontSize="2xl">
        Products
      </Text>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={2}
        align="stretch"
        w="100%"
      >
        <Flex h="2.5vw" pl="2%" align="center">
          <TiThSmall size="2.2vw" />
          <NavLink
            fontSize="1.5vw"
            pl="3%"
            pr="3%"
            fontWeight={category ? 'regular' : 'bold'}
            to="/store"
          >
            All products
          </NavLink>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpu size="2.2vw" />
          <NavLink
            fontSize="1.5vw"
            pl="3%"
            pr="3%"
            fontWeight={category === 'cpu' ? 'bold' : 'regular'}
            to="/store/cpu"
          >
            CPUs
          </NavLink>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaMemory size="2.2vw" />
          <NavLink
            fontSize="1.5vw"
            pl="3%"
            pr="3%"
            fontWeight={category === 'ram' ? 'bold' : 'regular'}
            to="/store/ram"
          >
            Memory
          </NavLink>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <FaDesktop size="2.2vw" />
          <NavLink
            fontSize="1.5vw"
            pl="3%"
            pr="3%"
            fontWeight={category === 'monitor' ? 'bold' : 'regular'}
            to="/store/monitor"
          >
            Monitors
          </NavLink>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <BsCpuFill size="2.2vw" />
          <NavLink
            fontSize="1.5vw"
            pl="3%"
            pr="3%"
            fontWeight={category === 'gpu' ? 'bold' : 'regular'}
            to="/store/gpu"
          >
            Graphics Cards
          </NavLink>
          <FaAngleRight size="1.2vw" />
        </Flex>
        <Flex h="2.5vw" pl="2%" align="center">
          <MdDeveloperBoard size="2.2vw" />
          <NavLink
            fontSize="1.5vw"
            pl="3%"
            pr="3%"
            fontWeight={category === 'motherboard' ? 'bold' : 'regular'}
            to="/store/motherboard"
          >
            Motherboards
          </NavLink>
          <FaAngleRight size="1.2vw" />
        </Flex>
      </VStack>
    </Box>
  );
}


export default Categories;