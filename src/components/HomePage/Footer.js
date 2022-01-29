import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

const Footer = () => {
  return (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    width="100%"
    height="80px">
      <Box>Free shipping</Box>
      <Box>90 days return</Box>
      <Box>Secure payments</Box>
      <Box>24/7 dedicated support</Box>
  </Flex>);
};

export default Footer;
