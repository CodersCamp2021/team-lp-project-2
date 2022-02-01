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
    <Flex
      gridArea="product"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pl={{ base: 0, md: 10 }}
      mt={{ base: 5, sm: 20, md: 0 }}
      pt={{ base: 20, sm: 5, md: 0 }}
      data-testId="HeroProduct"
    >
      <ProductCarousel
        heroProducts={heroProducts}
        isLoading={isLoading}
        active={active}
      />
      <ButtonGroup spacing={{ base: 60, sm: 60, md: 10 }} size="lg">
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
