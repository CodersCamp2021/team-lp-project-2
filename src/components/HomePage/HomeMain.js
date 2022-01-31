import { Grid } from '@chakra-ui/react';
import HeroProduct from './HeroProduct';
import HeroInfo from './HeroInfo';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const HomeMain = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [heroProducts, setHeroProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHeroProducts = async () => {
    let fetchedProducts = [];
    const productsQuery = query(
      collection(db, 'products'),
      where('details.showOnHomepage', '==', true),
    );
    setIsLoading(true);
    const snapshot = await getDocs(productsQuery);

    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      fetchedProducts.push({ ...data, id: doc.id });
    });
    console.log(fetchedProducts);
    setHeroProducts(fetchedProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      getHeroProducts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleIncrement = () => {
    setActiveItem(
      (active) => (active === heroProducts.length - 1 ? active : active + 1), // TODO: Swap to real products
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
      <HeroInfo
        heroProducts={heroProducts}
        isLoading={isLoading}
        active={activeItem}
      />
      <HeroProduct
        heroProducts={heroProducts}
        isLoading={isLoading}
        active={activeItem}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
    </Grid>
  );
};

export default HomeMain;
