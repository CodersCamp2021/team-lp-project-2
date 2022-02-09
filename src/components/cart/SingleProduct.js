import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Text, Image, Grid, GridItem } from '@chakra-ui/react';
import DeleteButton from './DeleteButton';
import NumberField from './NumberField';

const SingleProduct = ({
  name,
  price,
  amount,
  id,
  closeCart,
  images,
  borderBottom,
}) => {
  //logging is just for now. later it should update state in Context API
  const handleChangeAmount = (newValue) => {
    console.log(newValue);
  };

  return (
    <Grid
      templateColumns={{ base: 'repeat(2, 1fr)', sm: '80px auto 100px' }}
      templateRows={{ base: 'repeat(4, auto)', sm: 'repeat(2, 1fr)' }}
      gap="20px"
      py="20px"
      borderBottom={borderBottom}
    >
      <GridItem
        gridRow={{ base: '1 / 2', sm: '1 / 4' }}
        gridColumn={{ base: 'span 2', sm: '1' }}
        justifySelf="center"
        alignSelf="center"
        maxWidth="100px"
      >
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${images[0]}?alt=media`}
          alt="image"
        />
      </GridItem>
      <GridItem justifySelf="start" alignSelf="center">
        <ChakraLink
          onClick={() => closeCart()}
          as={RouterLink}
          to={`/store/product/${id}`}
          _hover={{ color: 'purple.500' }}
        >
          <Text
            pl={3}
            fontWeight="semibold"
            fontSize="md"
            maxWidth="250px"
            noOfLines={2}
          >
            {name}
          </Text>
        </ChakraLink>
      </GridItem>
      <GridItem alignSelf="center" justifySelf="center">
        <Text fontWeight="bold" fontSize="lg">
          ${parseFloat(price).toFixed(2)}
        </Text>
      </GridItem>
      <GridItem
        justifySelf="center"
        gridColumn={{ base: 'span 2', sm: 'auto' }}
      >
        <NumberField
          amount={amount}
          id={id}
          w="30%"
          defaultValue={amount}
          onChange={(value) => handleChangeAmount(value)}
        ></NumberField>
      </GridItem>
      <GridItem
        justifySelf="center"
        gridColumn={{ base: 'span 2', sm: 'auto' }}
      >
        <DeleteButton fontSize="1.5vw" cursor="pointer" id={id} />
      </GridItem>
    </Grid>
  );
};

export default SingleProduct;
