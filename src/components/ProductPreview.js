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
        shadow="md"
        borderWidth="1px"
        borderRadius="10px"
        width="200px"
        // height="160px"
        textAlign="center"
      >
        <Box maxHeight="100%">
          <Image
            src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${product.name}%2F1.jpg?alt=media`}
            alt="image"
          />
        </Box>
        <Flex>
          <Heading fontSize="md">{product.name}</Heading>
          <Button>
            <AddIcon />
          </Button>
        </Flex>
        <Text fontSize="md">${product.price}</Text>
      </Flex>
    </Link>
  );
};

export default ProductPreview;
