import React from 'react';
import { Text, Box, VStack, StackDivider } from '@chakra-ui/react';
import { FaDesktop, FaMemory } from 'react-icons/fa';
import { BsCpu, BsCpuFill } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';
import { MdDeveloperBoard } from 'react-icons/md';
import Category from './Category';

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
        <Category
          name={'All products'}
          icon={<TiThSmall size="2.2vw" />}
          isBolded={category ? false : true}
          path={'/store'}
        />
        <Category
          name={'CPUs'}
          icon={<BsCpu size="2.2vw" />}
          isBolded={category === 'cpu' ? true : false}
          path={'/store/cpu'}
        />
        <Category
          name={'Memory'}
          icon={<FaMemory size="2.2vw" />}
          isBolded={category === 'ram' ? true : false}
          path={'/store/ram'}
        />
        <Category
          name={'Monitors'}
          icon={<FaDesktop size="2.2vw" />}
          isBolded={category === 'monitor' ? true : false}
          path={'/store/monitor'}
        />
        <Category
          name={'Graphics Cards'}
          icon={<BsCpuFill size="2.2vw" />}
          isBolded={category === 'gpu' ? true : false}
          path={'/store/gpu'}
        />
        <Category
          name={'Motherboards'}
          icon={<MdDeveloperBoard size="2.2vw" />}
          isBolded={category === 'motherboard' ? true : false}
          path={'/store/motherboard'}
        />
      </VStack>
    </Box>
  );
};

export default Categories;
