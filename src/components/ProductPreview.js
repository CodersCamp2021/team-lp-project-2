import { Box, Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { AddIcon } from '@chakra-ui/icons';

const ProductPreview = ({ product }) => {
  const { id, name, price } = product;
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();

    //action for adding item to context API will be here
    console.log(`add to cart item with id: ${id}`);
  };

  const handleNavigateToProduct = () => {
    navigate(`/store/product/${id}`);
  };

  return (
    <Flex
      onClick={handleNavigateToProduct}
      cursor="pointer"
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
          src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${product.images[0]}?alt=media`}
          alt="image"
          height="90%"
          objectFit='contain'
        />
      </Box>
      <Flex gap="5px">
        <Heading fontSize="md" wordBreak="break-all" textAlign="left">
          {name}
        </Heading>
        <Button onClick={handleAddToCart}>
          <AddIcon />
        </Button>
      </Flex>
      <Text fontSize="md" textAlign="left">
        ${price}
      </Text>
    </Flex>
  );
};

export default ProductPreview;
