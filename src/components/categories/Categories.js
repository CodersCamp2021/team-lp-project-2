import React from 'react';
import { Text, Box, VStack, StackDivider } from '@chakra-ui/react';
import { FaDesktop, FaMemory } from 'react-icons/fa';
import { BsCpu, BsCpuFill } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';
import { MdDeveloperBoard } from 'react-icons/md';
import Category from './Category';

const Categories = ({ category }) => {
  const categories = [
    {
      name: 'All products',
      icon: <TiThSmall size="3vh" />,
      isBolded: category ? false : true,
      path: '/store',
    },
    {
      name: 'CPUs',
      icon: <BsCpu size="3vh" />,
      isBolded: category === 'cpu' ? true : false,
      path: '/store/cpu',
    },
    {
      name: 'Memory',
      icon: <FaMemory size="3vh" />,
      isBolded: category === 'ram' ? true : false,
      path: '/store/ram',
    },
    {
      name: 'Monitors',
      icon: <FaDesktop size="3vh" />,
      isBolded: category === 'monitor' ? true : false,
      path: '/store/monitor',
    },
    {
      name: 'Graphic Cards',
      icon: <BsCpuFill size="3vh" />,
      isBolded: category === 'gpu' ? true : false,
      path: '/store/gpu',
    },
    {
      name: 'Motherboards',
      icon: <MdDeveloperBoard size="3vh" />,
      isBolded: category === 'motherboard' ? true : false,
      path: '/store/motherboard',
    },
  ];

  return (
    <Box w={{ base: '100%', sm: '100%', md: '250px', lg: '300px' }}>
      <Text
        fontWeight="bold"
        mb={3}
        pl="2%"
        fontSize={{ base: '20px', md: '24px', lg: '30px' }}
      >
        Products
      </Text>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={{ base: '15px', md: '10px' }}
        align="stretch"
        w="100%"
        mb="3%"
      >
        {categories.map((cat) => (
          <Category
            name={cat.name}
            icon={cat.icon}
            path={cat.path}
            isBolded={cat.isBolded}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Categories;
