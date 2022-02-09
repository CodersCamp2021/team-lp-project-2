import { Button, useDisclosure } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../ProductContext';
import BuyConfirmation from './BuyConfirmation';

function BuyButton({ products, closeCart }) {
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dispatch } = useContext(ProductContext);
  const [clearTimer, setClearTimer] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
      clearTimeout(clearTimer);
    };
    //eslint-disable-next-line
  }, [loading]);

  function handleBuy() {
    setLoading(true);
    closeCart();
    onOpen();
    setClearTimer(
      setTimeout(() => {
        dispatch({ type: 'CLEAR_CART' });
      }, 500),
    );
  }

  return (
    <>
      {loading ? (
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
          rightIcon={<FaShoppingCart />}
          size="lg"
          onClick={handleBuy}
          disabled={products.length === 0 ? true : false}
        >
          Buy
        </Button>
      )}
      <BuyConfirmation onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default BuyButton;
