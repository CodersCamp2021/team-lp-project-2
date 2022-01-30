import { Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { DummyProducts } from './DummyProducts';

const ProductCarousel = () => {
  const [active, setActive] = useState(0);
  const productList = DummyProducts;
  return (
    <div>
      <Image
        height="lg"
        objectFit="contain"
        pb={8}
        src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${productList[active].images[0]}?alt=media`}
        alt={productList[active].name}
      />
      <Flex>
        {productList.map((product, index) => (
          <Image
            display="none"
            width={10}
            key={product.name}
            src={`https://firebasestorage.googleapis.com/v0/b/team-lp-project-2.appspot.com/o/${product.images[0]}?alt=media`}
            alt={product.name}
            className={index === active ? 'active' : ''}
          />
        ))}
      </Flex>
    </div>
  );
};

export default ProductCarousel;
