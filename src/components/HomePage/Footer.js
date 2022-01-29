import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { FaFacebookMessenger, FaCreditCard, FaExchangeAlt, FaShippingFast } from 'react-icons/fa';

const Footer = () => {
  return (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    width="100%"
    height="80px"
    gap="40px"
    background="white.500"
    px={{ base: '30px', md: '80px' }}
    display={{ base: 'grid' , md: 'flex' }}
    >
    <Box display="flex" gap="10px">
        <FaShippingFast size="23px" />
        <Text fontSize={{ base: '15px', md: '18px' }}>Free shipping</Text>
    </Box>
    <Box display="flex" gap="10px">
        <FaExchangeAlt size="23px" />
        <Text fontSize={{ base: '15px', md: '18px' }}>90 days return</Text>
    </Box>
    <Box display="flex" gap="10px">
        <FaCreditCard size="23px" />
        <Text fontSize={{ base: '15px', md: '18px' }}>Secure payments</Text>
    </Box>
    <Box display="flex" gap="10px">
        <FaFacebookMessenger size="23px" />
        <Text fontSize={{ base: '15px', md: '18px' }}>24/7 dedicated support</Text>
    </Box>
  </Flex>);
};

export default Footer;
