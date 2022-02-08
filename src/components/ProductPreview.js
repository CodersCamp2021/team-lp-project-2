import { Box, Flex, Text, Image, Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AddIcon, CheckIcon } from '@chakra-ui/icons';
import { ProductContext } from './ProductContext';
import { BsCheckCircleFill } from 'react-icons/bs';

const ProductPreview = ({ product }) => {
  const { id, name, price } = product;
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const toast = useToast();

  const { dispatch } = useContext(ProductContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
    //eslint-disable-next-line
  }, [disabled]);

  const showToast = () => {
    toast({
      duration: 3000,
      position: 'bottom-left',
      render: () => (
        <Box color="white" p={4} bg="purple.500" borderRadius="5px">
          <Flex alignItems="center" gap="10px">
            <BsCheckCircleFill />
            <Text fontWeight="bold">Product added to cart!</Text>
          </Flex>
          <Text fontSize={{ base: '20px', md: '15px' }}>
            Check if he hasn't escaped from there.
          </Text>
        </Box>
      ),
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setDisabled(true);
    dispatch({ type: 'ADD_PROD', payload: { product: product } });
    showToast();
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
        {!disabled ? (
          <Button onClick={handleAddToCart}>
            <AddIcon />
          </Button>
        ) : (
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
