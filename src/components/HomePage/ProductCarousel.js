import { Flex, Image, Spinner } from '@chakra-ui/react';

const ProductCarousel = ({ heroProducts, isLoading, active }) => {
  return (
    <Flex height="80%" width="100%" justifyContent="center" alignItems="center">
      {!isLoading ? (
        heroProducts.map((product, index) => (
          <Image
            boxSize={{ base: 'xs', sm: 'md', md: 'lg' }}
            objectFit="contain"
            pb={8}
            position="absolute"
            opacity={index === active ? 1 : 0}
            transition="300ms opacity ease-in-out 100ms"
            key={product.id}
            src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${product.images[0]}?alt=media`}
            alt={product.name}
          />
        ))
      ) : (
        <Spinner
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
        />
      )}
    </Flex>
  );
};

export default ProductCarousel;
