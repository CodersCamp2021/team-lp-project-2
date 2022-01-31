import { Flex, IconButton, ButtonGroup } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ProductCarousel from './ProductCarousel';

const HeroProduct = ({
  heroProducts,
  isLoading,
  active,
  increment,
  decrement,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <ProductCarousel
        heroProducts={heroProducts}
        isLoading={isLoading}
        active={active}
      />
      <ButtonGroup spacing={10} size="lg">
        <IconButton
          aria-label="View previous item"
          fontSize="40px"
          borderRadius="50%"
          bgGradient="linear-gradient(0deg, #DCDCDC 40%, rgba(255, 255, 255, 0.8) 100%)"
          icon={<ChevronLeftIcon />}
          onClick={decrement}
          disabled={active === 0 ? true : false}
        />
        <IconButton
          aria-label="View next item"
          fontSize="40px"
          borderRadius="50%"
          bgGradient="linear-gradient(0deg, #DCDCDC 40%, rgba(255, 255, 255, 0.8) 100%)"
          icon={<ChevronRightIcon />}
          onClick={increment}
          disabled={active === heroProducts.length - 1 ? true : false}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default HeroProduct;
