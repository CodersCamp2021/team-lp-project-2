import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const CartSummary = () => {
  return (
    <Box bg="green" w="100%" h="50%" p={10} color="white">
      <Text fontSize="3xl" ml="10px" align="center">
        Total: $951.93
      </Text>
      <Flex direction="column" align="center" justify="end">
        <Button w="20%" mt="25" colorScheme="teal">
          Button
        </Button>
        <Button w="20%" mt="5" colorScheme="blue">
          Button
        </Button>
      </Flex>
    </Box>
  );
};

export default CartSummary;
