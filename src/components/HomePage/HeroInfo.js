import { Grid, Heading, Text, Button } from '@chakra-ui/react';
import { DummyProducts } from './DummyProducts';

const HeroInfo = ({ active }) => {
  return (
    <Grid
      maxHeight="100%"
      gridTemplateRows={{ base: '2fr 1fr 2fr 1fr' }}
      alignItems="flex-start"
      overflowWrap="break-word"
    >
      <Heading as="h1" size="2xl" alignSelf="flex-end">
        {DummyProducts[active].name}
      </Heading>
      <Heading as="h2" size="lg" alignSelf="center" fontWeight={400}>
        Price: ${parseFloat(DummyProducts[active].price).toFixed(2)}
      </Heading>
      <Text fontSize="lg">
        Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
        ullamcorper. Diam donec adipiscing tristique risus nec feugiat in. Cras
        ornare arcu dui vivamus arcu felis.asdfasdfasdfasdf
      </Text>
      <Button
        fontSize={{ base: '14px', sm: '16px', md: '20px', lg: '24px' }}
        boxShadow="lg"
        rounded="sm"
        textColor="white"
        bg="teal.600"
        fontWeight={300}
        alignSelf="flex-start"
        justifySelf="center"
        px={{ base: '44px' }}
        py={{ base: '24px' }}
      >
        Go to the store
      </Button>
    </Grid>
  );
};

export default HeroInfo;
