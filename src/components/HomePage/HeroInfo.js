import {
  Grid,
  Heading,
  Text,
  Button,
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';

const HeroInfo = ({ heroProducts, isLoading, active }) => {
  const navigate = useNavigate();
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
      <Button
        fontSize={{ base: '16px', sm: '16px', md: '20px', lg: '24px' }}
        boxShadow="lg"
        rounded="md"
        textColor="white"
        bg="purple.500"
        fontWeight={300}
        alignSelf={{ base: 'center', md: 'flex-start' }}
        justifySelf="center"
        px={{ base: '20px' }}
        py={{ base: '24px' }}
        my={{ base: '20px' }}
        rightIcon={<CgDetailsMore />}
        onClick={() => {
          navigate(
            isLoading ? '/store' : `/store/product/${heroProducts[active]?.id}`,
          );
        }}
      >
        Show details
      </Button>
    </Grid>
  );
};

export default HeroInfo;
