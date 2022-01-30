import { Grid, Heading, Text, Button } from '@chakra-ui/react';

const HeroInfo = () => {
  return (
    <Grid
      maxHeight="70vh"
      gridTemplateRows={{ base: '2fr 1fr 1fr 1fr' }}
      alignItems="flex-start"
      overflowWrap="break-word"
      pr={{ base: '15px', md: '40px' }}
    >
      <Heading as="h1" size="2xl" alignSelf="flex-end">
        Lorem ipsum dolor sit a
      </Heading>
      <Heading as="h2" size="lg" alignSelf="center" fontWeight={400}>
        Dolor sit amet tincidunt nunc
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
        alignSelf="center"
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
