import React from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import {
  FaFacebookMessenger,
  FaCreditCard,
  FaExchangeAlt,
  FaShippingFast,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Grid
      as="nav"
      borderTop="1px solid gray"
      height={{ base: '190px', sm: '140px', md: '100px', lg: '80px' }}
      gridTemplateColumns={{
        md: 'repeat(4, minmax(180px, 1fr))',
        sm: 'repeat(2, 1fr)',
      }}
      gap={{ base: '12px' }}
      gridTemplateRows="auto"
      placeItems="center"
      alignContent="space-around"
      bgColor="whitesmoke"
      zIndex={2}
    >
      <Box display="flex" gap="10px">
        <FaShippingFast size="23px" />
        <Text
          fontSize={{ base: '13px', sm: '16px', md: '16px', lg: '18px' }}
          fontWeight={700}
          textAlign="center"
        >
          Free shipping
        </Text>
      </Box>
      <Box display="flex" gap="10px">
        <FaExchangeAlt size="23px" />
        <Text
          fontSize={{ base: '13px', sm: '16px', md: '16px', lg: '18px' }}
          fontWeight={700}
          textAlign="center"
        >
          90 days return
        </Text>
      </Box>
      <Box display="flex" gap="10px">
        <FaCreditCard size="23px" />
        <Text
          fontSize={{ base: '13px', sm: '16px', md: '16px', lg: '18px' }}
          fontWeight={700}
          textAlign="center"
        >
          Secure payments
        </Text>
      </Box>
      <Box display="flex" gap="10px">
        <FaFacebookMessenger size="23px" />
        <Text
          fontSize={{ base: '13px', sm: '16px', md: '16px', lg: '18px' }}
          fontWeight={700}
          textAlign="center"
        >
          24/7 dedicated support
        </Text>
      </Box>
    </Grid>
  );
};

export default Footer;
