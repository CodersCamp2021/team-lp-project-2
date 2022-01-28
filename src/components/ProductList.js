import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  SimpleGrid,
  Box,
  Text,
  Flex,
  Heading,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from './Store';

const ProductList = ({ products }) => {
  let { category } = useParams();
  const updateCategory = useContext(CategoryContext);
  let [searchParams] = useSearchParams();
  const [sorting, setSorting] = useState('Name: A-Z');

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

    return categoryProducts;
  };

  const applySearch = (filteredProducts) => {
    let searchedName = searchParams.get('name');

    if (!searchedName) return filteredProducts;

    return filteredProducts.filter((product) =>
      product.name
        .toLowerCase()
        .includes(decodeURIComponent(searchedName.toLowerCase())),
    );
  };

  useEffect(() => {
    updateCategory(category);
    // eslint-disable-next-line
  }, [category]);

  return (
    <Flex mt={10} justifyContent="center" flexDirection="column">
      <label>
        Sort By:
        <Select
          size="sm"
          mb={4}
          maxWidth={175}
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="price(asc)">Price: Low to High</option>
          <option value="price(desc)">Price: High to Low</option>
          <option value="name(asc)">Name: A-Z</option>
          <option value="name(desc)">Name: Z-A</option>
        </Select>
      </label>
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
