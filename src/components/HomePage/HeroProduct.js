import { Flex, Image, IconButton, ButtonGroup } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import ProductCarousel from './ProductCarousel';
import { DummyProducts } from './DummyProducts';
import ProductList from '../ProductList';

const HeroProduct = () => {
  const [active, setActive] = useState(0);

  const handleIncrement = () => {
    setActive((active) =>
      active === DummyProducts.length - 1 ? active : active + 1,
    );
  };

  const handleDecrement = () => {
    setActive((active) => (active === 0 ? active : active - 1));
  };

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      {/* <Image
        height="lg"
        objectFit="contain"
        pb={8}
        src="https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/AMD%20Ryzen%205%203600X%2F1.jpg?alt=media"
      /> */}
      <ProductCarousel active={active} />
      <ButtonGroup spacing={10} size="lg">
        <IconButton
          aria-label="View previous item"
          fontSize="40px"
          borderRadius="50%"
          bgGradient="linear-gradient(0deg, #DCDCDC 40%, rgba(255, 255, 255, 0.8) 100%)"
          icon={<ChevronLeftIcon />}
          onClick={handleDecrement}
          disabled={active === 0 ? true : false}
        />
        <IconButton
          aria-label="View next item"
          fontSize="40px"
          borderRadius="50%"
          bgGradient="linear-gradient(0deg, #DCDCDC 40%, rgba(255, 255, 255, 0.8) 100%)"
          icon={<ChevronRightIcon />}
          onClick={handleIncrement}
          disabled={active === DummyProducts.length - 1 ? true : false}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default HeroProduct;
