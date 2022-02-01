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
    setActiveItem((active) =>
      active === heroProducts.length - 1 ? active : active + 1,
    );
  };

  const handleDecrement = () => {
    setActiveItem((active) => (active === 0 ? active : active - 1));
  };

  return (
    <Grid
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
      maxHeight="80vh"
      py={{ base: '20px', sm: '30px', md: '40px', lg: '60px' }}
      px={{ base: '30px', sm: '40px', md: '80px', lg: '140px' }}
      mb={{ base: '60px', md: '0' }}
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
