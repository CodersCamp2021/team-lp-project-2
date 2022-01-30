import { Grid } from '@chakra-ui/react';
import HeroProduct from './HeroProduct';
import HeroInfo from './HeroInfo';

const HomeMain = () => {
  return (
    <Grid
      gridTemplateColumns="2fr 4fr"
      gridTemplateRows="auto 1fr auto"
      maxHeight="80vh"
      py={{ base: '60px' }}
      px={{ base: '30px', md: '80px' }}
    >
      <HeroInfo />
      <HeroProduct />
    </Grid>
  );
};

export default HomeMain;
