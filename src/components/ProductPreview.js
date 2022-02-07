import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Slide,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { AddIcon, CheckIcon } from '@chakra-ui/icons';
import { ProductContext } from './ProductContext';

const ProductPreview = ({ product }) => {
  const { id, name, price } = product;
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { dispatch } = useContext(ProductContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
    //eslint-disable-next-line
  }, [isOpen]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_PROD', payload: { product: product } });
    onOpen();
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
        {!isOpen ? (
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
        <Slide
          direction="bottom"
          in={isOpen}
          style={{ zIndex: 10 }}
          animateOpacity
        >
          <Box
            p="10px"
            color="white"
            mt="4"
            bg="purple.500"
            shadow="lg"
            rounded="lg"
          >
            <Text fontWeight="semibold" fontSize={{ base: '15px', md: '20px' }}>
              Product added to cart!
            </Text>
          </Box>
        </Slide>
      </Flex>
      <Text fontSize="md" textAlign="left">
        ${price}
      </Text>
    </Flex>
  );
};

export default ProductPreview;
