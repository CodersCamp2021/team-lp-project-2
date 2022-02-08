import {
  Grid,
  Heading,
  Text,
  Button,
  SkeletonText,
  Skeleton,
  ButtonGroup,
  useToast,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import { ProductContext } from '../ProductContext';

const HeroInfo = ({ heroProducts, isLoading, active }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const { dispatch } = useContext(ProductContext);

  const showToast = () => {
    toast({
      duration: 3000,
      position: 'bottom-left',
      render: () => (
        <Box color="white" p={4} bg="purple.500" borderRadius="5px">
          <Flex alignItems="center" gap="10px">
            <BsCheckCircleFill />
            <Text fontWeight="bold">Product added to cart!</Text>
          </Flex>
          <Text fontSize={{ base: '20px', md: '15px' }}>
            Check if he hasn't escaped from there.
          </Text>
        </Box>
      ),
    });
  };

  return (
    <Grid
      gridArea="info"
      maxHeight="100%"
      gridTemplateRows={{ base: '1fr 1fr 2fr 1fr', md: '2fr 1fr 2fr 1fr' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      data-testid="HeroInfo"
      wordBreak="break-word"
    >
      <Skeleton isLoaded={!isLoading} alignSelf="flex-end">
        <Heading as="h1" size="xl" textAlign="center">
          {heroProducts[active]?.name}
        </Heading>
      </Skeleton>
      <Skeleton isLoaded={!isLoading} alignSelf="center" size="lg">
        <Heading as="h2" size="lg" fontWeight={400}>
          Price: ${parseFloat(heroProducts[active]?.price).toFixed(2)}
        </Heading>
      </Skeleton>
      <SkeletonText isLoaded={!isLoading} noOfLines={6}>
        <Text fontSize="md">{heroProducts[active]?.details.description}</Text>
      </SkeletonText>
      <ButtonGroup justifyContent="center">
        <Button
          fontSize={{ base: '16px', sm: '16px', md: '20px', lg: '24px' }}
          boxShadow="md"
          textColor="white"
          colorScheme="purple"
          fontWeight={300}
          alignSelf={{ base: 'center', md: 'flex-start' }}
          justifySelf="center"
          px={{ base: '20px' }}
          py={{ base: '24px' }}
          my={{ base: '20px' }}
          rightIcon={<CgDetailsMore />}
          onClick={() => {
            navigate(
              isLoading
                ? '/store'
                : `/store/product/${heroProducts[active]?.id}`,
            );
          }}
        >
          Show details
        </Button>
        <Button
          fontSize={{ base: '16px', sm: '16px', md: '20px', lg: '24px' }}
          colorScheme="purple"
          variant="outline"
          fontWeight={300}
          boxShadow="md"
          px={{ base: '20px' }}
          py={{ base: '24px' }}
          my={{ base: '20px' }}
          onClick={() => {
            navigate(
              isLoading
                ? '/store'
                : `/store/product/${heroProducts[active]?.id}`,
            );
            if (!isLoading) {
              dispatch({
                type: 'ADD_PROD',
                payload: { product: heroProducts[active] },
              });
              showToast();
            }
          }}
        >
          Add to cart
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default HeroInfo;
