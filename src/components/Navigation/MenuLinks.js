import React from 'react';
import {
  Stack,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useMatch, Link } from 'react-router-dom';

const MenuLinks = ({ isMenuOpen }) => {
  const match = useMatch('/*');
  const currentPath = match.pathname;

  return (
    <Breadcrumb
      as="div"
      separator={false}
      display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }}
      alignItems="center"
      direction={{
        base: 'column',
        md: 'row',
      }}
      position={{
        base: 'absolute',
        md: 'static',
      }}
      width={{
        base: '100%',
        md: 'auto',
      }}
      textAlign="center"
      top="80px"
      left="0"
      gap="40px"
      pt={{ base: '40px', md: '0' }}
      pb={{ base: '40px', md: '0' }}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to="/"
          fontSize="xl"
          color={currentPath === '/' && 'blue.400'}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to="/store"
          fontSize="xl"
          color={currentPath === '/store' && 'blue.400'}
          data-testid="store"
        >
          Store
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Flex justify="center">
          <FaShoppingCart data-testid="cart" size="30px" />
        </Flex>
      </BreadcrumbItem>
    </Breadcrumb>
  );

  return (
    <Stack
      display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      position={{
        base: 'absolute',
        md: 'static',
      }}
      width={{
        base: '100%',
        md: 'auto',
      }}
      textAlign="center"
      top="80px"
      left="0"
      gap="40px"
      pt={{ base: '40px', md: '0' }}
      pb={{ base: '40px', md: '0' }}
    >
      <Link to="/" fontSize="xl" color={currentPath === '/' && 'blue.400'}>
        Home
      </Link>
      <Link
        to="/store"
        fontSize="xl"
        color={currentPath === '/store' && 'blue.400'}
        data-testid="store"
      >
        Store
      </Link>
    </Stack>
  );
};

export default MenuLinks;
