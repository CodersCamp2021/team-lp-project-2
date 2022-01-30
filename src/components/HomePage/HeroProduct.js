import { Flex, Image, IconButton, ButtonGroup } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ProductCarousel from './ProductCarousel';

const HeroProduct = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      {/* <Image
        height="lg"
        objectFit="contain"
        pb={8}
        src="https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/AMD%20Ryzen%205%203600X%2F1.jpg?alt=media"
      /> */}
      <ProductCarousel />
      <ButtonGroup spacing={10} size="lg">
        <IconButton
          aria-label="View previous item"
          fontSize="40px"
          borderRadius="50%"
          bgGradient="linear-gradient(0deg, #DCDCDC 40%, rgba(255, 255, 255, 0.8) 100%)"
          icon={<ChevronLeftIcon />}
        />
        <IconButton
          aria-label="View next item"
          fontSize="40px"
          borderRadius="50%"
          bgGradient="linear-gradient(0deg, #DCDCDC 40%, rgba(255, 255, 255, 0.8) 100%)"
          icon={<ChevronRightIcon />}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default HeroProduct;
