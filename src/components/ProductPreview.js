import { Box, Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';

const ProductPreview = ({ product }) => {
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <Link to={`/store/product/${product.id}`}>
      <Flex
        p={5}
        direction="column"
        justifyContent="center"
        gap="5px"
        shadow="md"
        borderWidth="1px"
        borderRadius="10px"
        width="220px"
        height="250px"
        textAlign="center"
      >
        <Box
          boxSize="120px"
          alignSelf="center"
          display="flex"
          justifyContent="center"
        >
          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${product.name}%2F1.jpg?alt=media`}
            alt="image"
            height="90%"
          />
        </Box>
        <Flex gap="5px">
          <Heading fontSize="md" wordBreak="break-all" textAlign="left">
            {product.name}
          </Heading>
          <Button>
            <AddIcon />
          </Button>
        </Flex>
        <Text fontSize="md" textAlign="left">
          ${product.price}
        </Text>
      </Flex>
    </Link>
  );
};

export default ProductPreview;
