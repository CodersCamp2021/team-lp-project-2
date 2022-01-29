import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
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
    px="80px"
    >
    <Box display="flex" gap="10px">
        <FaShippingFast size="25px" />
        Free shipping
    </Box>
    <Box display="flex" gap="10px">
        <FaExchangeAlt size="25px" />
        90 days return
    </Box>
    <Box display="flex" gap="10px">
        <FaCreditCard size="25px" />
        Secure payments
    </Box>
    <Box display="flex" gap="10px">
        <FaFacebookMessenger size="25px" />
        24/7 dedicated support
    </Box>
  </Flex>);
};

export default Footer;
