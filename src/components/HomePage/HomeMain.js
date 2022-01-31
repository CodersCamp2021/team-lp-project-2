import { Grid } from '@chakra-ui/react';
import HeroProduct from './HeroProduct';
import HeroInfo from './HeroInfo';
import { useState } from 'react';
import { DummyProducts } from './DummyProducts';

const HomeMain = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleIncrement = () => {
    setActiveItem(
      (active) => (active === DummyProducts.length - 1 ? active : active + 1), // TODO: Swap to real products
    );
  };

  const handleDecrement = () => {
    setActiveItem((active) => (active === 0 ? active : active - 1));
  };

  return (
    <Grid
      gridTemplateColumns="2fr 4fr"
      maxHeight="80vh"
      py={{ base: '60px' }}
      px={{ base: '30px', md: '160px' }}
    >
      <HeroInfo active={activeItem} />
      <HeroProduct
        active={activeItem}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
    </Grid>
  );
};

export default HomeMain;
