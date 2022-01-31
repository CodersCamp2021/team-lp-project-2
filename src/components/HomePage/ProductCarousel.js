import { Flex, Image } from '@chakra-ui/react';
import { DummyProducts } from './DummyProducts';

const ProductCarousel = ({ active }) => {
  const productList = DummyProducts;
  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Image
          height="lg"
          objectFit="contain"
          pb={8}
          src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${productList[active].images[0]}?alt=media`}
          alt={productList[active].name}
          transition="200ms opacity ease-in-out"
          opacity={1}
          position="relative"
        /> */}
      {productList.map((product, index) => (
        <Image
          boxSize={{ base: 'xs', sm: 'md', md: 'lg' }}
          objectFit="contain"
          pb={8}
          position="absolute"
          opacity={index === active ? 1 : 0}
          transition="300ms opacity ease-in-out 300ms"
          // display="none"
          key={product.name} // TODO: Change to ID with real products
          src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${product.images[0]}?alt=media`}
          alt={product.name}
          className={index === active ? 'active' : ''}
        />
      ))}
    </Flex>
  );
};

export default ProductCarousel;
