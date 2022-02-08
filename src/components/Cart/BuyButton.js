import { Button } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../ProductContext';

function BuyButton({ products, closeCart }) {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(ProductContext);

  useEffect(() => {
    const closingTimer = setTimeout(() => {
      closeCart();
    }, 1000);
    const clearTimer = setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(closingTimer);
      clearTimeout(clearTimer);
    };
    //eslint-disable-next-line
  }, [loading]);

  function handleBuy() {
    setLoading(!loading);
  }

  return loading ? (
    <Button
      isLoading
      loadingText="Processing..."
      width="160px"
      colorScheme="purple"
      rightIcon={<FaShoppingCart />}
      size="lg"
      disabled={products.length === 0 ? true : false}
    >
      Buy
    </Button>
  ) : (
    <Button
      width="160px"
      colorScheme="purple"
      onClick={handleBuy}
      rightIcon={<FaShoppingCart />}
      size="lg"
      disabled={products.length === 0 ? true : false}
    >
      Buy
    </Button>
  );
}

export default BuyButton;
