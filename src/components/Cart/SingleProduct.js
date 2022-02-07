import React from 'react';
import { Text, Image, Grid, GridItem } from '@chakra-ui/react';
import DeleteButton from './DeleteButton';
import NumberField from './NumberField';

const SingleProduct = ({ name, price, amount, id }) => {
  //logging is just for now. later it should update state in Context API
  const handleChangeAmount = (newValue) => {
    console.log(newValue);
  };

  return (
    <Grid
      templateColumns="80px auto 100px"
      templateRows="repeat(2, 1fr)"
      gap="10px"
      py="20px"
      borderBottom="1px solid #000"
    >
      <GridItem rowSpan={2} alignSelf="center">
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${name}%2F1.jpg?alt=media`}
          alt="image"
        />
      </GridItem>
      <GridItem justifySelf="start" alignSelf="center">
        <Text
          pl={3}
          fontWeight="semibold"
          fontSize="md"
          maxWidth="250px"
          isTruncated
        >
          {name}
        </Text>
      </GridItem>
      <GridItem alignSelf="center" justifySelf="center">
        <Text fontWeight="bold" fontSize="lg">
          ${parseFloat(price).toFixed(2)}
        </Text>
      </GridItem>
      <GridItem justifySelf="center" bg="tomato">
        <NumberField
          amount={amount}
          id={id}
          w="30%"
          defaultValue={amount}
          onChange={(value) => handleChangeAmount(value)}
        ></NumberField>
      </GridItem>
      <GridItem justifySelf="center">
        <DeleteButton fontSize="1.5vw" cursor="pointer" id={id} />
      </GridItem>
    </Grid>
  );
};

export default SingleProduct;
