import { Grid, Flex, H1, H3, Text, Button, Heading } from '@chakra-ui/react';
import HeroProduct from './HeroProduct';

const HomeMain = () => {
  return (
    <Grid gridTemplateColumns="1fr 3fr" maxHeight="80vh">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h1">Lorem ipsum</Heading>
        <Heading as="h3">dolor sit amet</Heading>
        <Text>
          Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
          ullamcorper. Diam donec adipiscing tristique risus nec feugiat in.
          Cras ornare arcu dui vivamus arcu felis.
        </Text>
        <Button>Go to the store</Button>
      </Flex>
      <HeroProduct />
    </Grid>
  );
};

export default HomeMain;
