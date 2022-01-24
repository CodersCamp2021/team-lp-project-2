import { Link, useParams, useSearchParams } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex, Heading } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { CategoryContext } from './DummyStore';

const ProductList = ({ products }) => {
  let { category } = useParams();
  const updateCategory = useContext(CategoryContext);
  let [searchParams] = useSearchParams();

  const applyCategory = () => {
    if (category) {
      return products.filter(
        (product) => product.type.toLowerCase() === category.toLowerCase(),
      );
    } else {
      return products;
    }
  };

  const applyFilters = (categoryProducts) => {
    const filters = {
      minPrice: searchParams.get('minPrice'),
      maxPrice: searchParams.get('maxPrice'),
      brand: searchParams
        .get('brand')
        ?.split(',')
        .map((name) => name.toLowerCase()),
    };

    const activeFilters = Object.entries(filters).filter(
      ([key, value]) => !!value,
    );
    if (activeFilters.length < 1) return categoryProducts;

    if (filters.minPrice && filters.maxPrice) {
      categoryProducts = categoryProducts.filter((product) => {
        return (
          parseFloat(product.price) >= parseFloat(filters.minPrice) &&
          parseFloat(product.price) <= parseFloat(filters.maxPrice)
        );
      });
    }
    if (filters.brand) {
      categoryProducts = categoryProducts.filter((product) =>
        filters.brand.includes(product.details.brand.toLowerCase()),
      );
    }
    console.log(categoryProducts);
    return categoryProducts;
  };

  useEffect(() => {
    updateCategory(category);
  }, [category]);

  return (
    <Flex mt={10} justifyContent="center">
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        maxWidth="80vw"
        gap={60}
        justifyItems="center"
        alignItems="center"
      >
        {products.length > 0
          ? applyFilters(applyCategory()).map((product) => (
              <Link key={product.name} to={`/store/product/${product.id}`}>
                <Box
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  width="200px"
                  height="160px"
                  textAlign="center"
                >
                  <Heading fontSize="md">{product.name}</Heading>
                  <Text fontSize="md">${product.price}</Text>
                  <Text fontSize="md">{product.details.brand}</Text>
                </Box>
              </Link>
            ))
          : 'Loading...'}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductList;
