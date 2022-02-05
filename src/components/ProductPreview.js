import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { AddIcon, CheckIcon } from '@chakra-ui/icons';

const dummyProducts = [
  {
    id: 'kadLxR1qP7QcNLTFHX4d',
    name: 'Intel Core i9-9900KF',
    price: 276.32,
    amount: 1,
  },
  {
    id: 'WDydJrOvGbKeEoro7Nyr',
    name: 'Corsair CMW32GX4M2E3200C16',
    price: 59.99,
    amount: 4,
  },
  {
    id: 'rctzGlVEKJXKjXxZGrOV',
    name: 'SAMSUNG 23.5” CF396 Curved Computer Monitor',
    price: 169.99,
    amount: 1,
  },
  {
    id: '83IBRHpRmvrTUKHod8Tu',
    name: 'AMD Ryzen 7 5800X',
    price: 329.78,
    amount: 6,
  },
];

const ProductPreview = ({ product }) => {
  const { id, name, price } = product;
  const navigate = useNavigate();

  /**
   * !!!!!!!!!
   * replace dummyProducts with real products from context API
   * !!!!!!!!!
   */
  const isProductInCart = dummyProducts.some((product) => product.id === id);

  const handleAddToCart = (e) => {
    e.stopPropagation();

    //action for adding item to context API will be here
    console.log(`add to cart item with id: ${id}`);
  };

  const handleGhostClick = (e) => {
    e.stopPropagation();
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
          objectFit="contain"
        />
      </Box>
      <Flex gap="5px">
        <Text fontWeight="bold" noOfLines={2} fontSize="md" textAlign="left">
          {name}
        </Text>

        {!isProductInCart && (
          <Button onClick={handleAddToCart}>
            <AddIcon />
          </Button>
        )}

        {isProductInCart && (
          <Button
            bg="purple.500"
            _hover={{ bg: 'purple.500' }}
            _focus={{ bg: 'purple.500' }}
            _active={{ bg: 'purple.500' }}
            onClick={handleGhostClick}
          >
            <CheckIcon color="white" />
          </Button>
        )}
      </Flex>
      <Text fontSize="md" textAlign="left">
        ${price}
      </Text>
    </Flex>
  );
};

export default ProductPreview;
