import { Link, useParams, useSearchParams } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex, Heading } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { CategoryContext } from './Store';

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
      minPrice: searchParams.get('min'),
      maxPrice: searchParams.get('max'),
      brand: searchParams
        .get('brands')
        ?.split(',')
        .map((name) => name.toLowerCase()),
    };

    const activeFilters = Object.entries(filters).filter(
      ([key, value]) => !!value,
    );
    if (activeFilters.length < 1) return categoryProducts;

    let filteredProducts = categoryProducts;

    if (filters.minPrice && filters.maxPrice) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          parseFloat(product.price) >= parseFloat(filters.minPrice) &&
          parseFloat(product.price) <= parseFloat(filters.maxPrice)
        );
      });
    }
    if (filters.brand) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brand.includes(product.details.brand.toLowerCase()),
      );
    }

    return filteredProducts;
  };

  const applySearch = (filteredProducts) => {
    let searchedName = searchParams.get('name');

    if (!searchedName) return filteredProducts;

    let searchedProducts = filteredProducts.filter((product) =>
      product.name
        .toLowerCase()
        .includes(decodeURIComponent(searchedName.toLowerCase())),
    );

    return searchedProducts;
  };

  useEffect(() => {
    updateCategory(category);
    // eslint-disable-next-line
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
          ? applySearch(applyFilters(applyCategory())).map((product) => (
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
