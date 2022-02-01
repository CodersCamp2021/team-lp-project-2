import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export default function Category({ name, icon, isBolded, path }) {
  return (
    <Flex h="2.5vw" pl="2%" align="center">
      {icon}
      <Link
        as={RouterLink}
        fontSize={{ base: '16px', md: '20px', lg: '24px' }}
        pl="3%"
        pr="3%"
        fontWeight={isBolded ? 'bold' : 'regular'}
        to={path}
      >
        {name}
      </Link>
      <FaAngleRight size="1.2vw" />
    </Flex>
  );
}
