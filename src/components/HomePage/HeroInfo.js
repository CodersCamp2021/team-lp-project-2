import {
  Grid,
  Heading,
  Text,
  Button,
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HeroInfo = ({ heroProducts, isLoading, active }) => {
  const navigate = useNavigate();
  return (
    <Grid
      gridArea="info"
      maxHeight="100%"
      gridTemplateRows={{ base: '2fr 1fr 2fr 1fr' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      data-testId="HeroInfo"
      overflow="hidden"
      textOverflow="ellipsis"
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
      <Button
        fontSize={{ base: '16px', sm: '16px', md: '20px', lg: '24px' }}
        boxShadow="lg"
        rounded="sm"
        textColor="white"
        bg="teal.600"
        fontWeight={300}
        alignSelf={{ base: 'flex-end', md: 'flex-start' }}
        justifySelf="center"
        px={{ base: '44px' }}
        py={{ base: '24px' }}
        my={{ base: '20px' }}
        onClick={() => {
          navigate(
            isLoading ? '/store' : `/store/product/${heroProducts[active]?.id}`,
          );
        }}
      >
        Go to the store
      </Button>
    </Grid>
  );
};

export default HeroInfo;
