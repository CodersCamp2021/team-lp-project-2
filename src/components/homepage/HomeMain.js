import { Grid } from '@chakra-ui/react';
import HeroProduct from './HeroProduct';
import HeroInfo from './HeroInfo';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { delayLoading } from '../utils';

const HomeMain = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [heroProducts, setHeroProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getHeroProducts = async () => {
    let fetchedProducts = [];
    const productsQuery = query(
      collection(db, 'products'),
      where('details.showOnHomepage', '==', true),
    );
    const snapshot = await getDocs(productsQuery);

    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      fetchedProducts.push({ ...data, id: doc.id });
    });
    setHeroProducts(fetchedProducts);
  };

  useEffect(() => {
    try {
      getHeroProducts();
    } catch (error) {
      console.error(error);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const timer = delayLoading(setIsLoading, heroProducts.length);
    return () => clearTimeout(timer);
  }, [heroProducts]);

  const handleIncrement = () => {
    setActiveItem((active) =>
      active === heroProducts.length - 1 ? active : active + 1,
    );
  };

  const handleDecrement = () => {
    setActiveItem((active) => (active === 0 ? active : active - 1));
  };

  return (
    <Grid
      data-testid="HomeMain"
      gridTemplateColumns={{
        base: '1fr',
        sm: '1fr',
        md: '1fr 1fr',
        lg: '2fr 3fr',
      }}
      gridTemplateRows="auto"
      gridTemplateAreas={{
        base: `'product' 'info'`,
        sm: `'product' 'info'`,
        md: `'info product'`,
        lg: `'info product'`,
      }}
      py={{ base: '10px', sm: '20px', md: '30px', lg: '40px' }}
      px={{ base: '30px', sm: '40px', md: '80px', lg: '140px' }}
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
