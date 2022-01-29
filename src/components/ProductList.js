import { Link, useParams, useSearchParams } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex, Heading, Select } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from './Store';

const SortStates = {
  NAME_ASC: 'name(asc)',
  NAME_DESC: 'name(desc)',
  PRICE_ASC: 'price(asc)',
  PRICE_DESC: 'price(desc)',
};
Object.freeze(SortStates);

const ProductList = ({ products }) => {
  let { category } = useParams();
  const [sorting, setSorting] = useState(SortStates.NAME_ASC);
  const updateCategory = useContext(CategoryContext);
  let [searchParams] = useSearchParams();

  const sortName = (a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  const handleCategory = () => {
    if (category) {
      return products.filter(
        (product) => product.type.toLowerCase() === category.toLowerCase(),
      );
    } else {
      return products;
    }
  };

  const handleFilter = (productList) => {
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
    if (activeFilters.length < 1) return productList;

    if (filters.minPrice && filters.maxPrice) {
      productList = productList.filter((product) => {
        return (
          parseFloat(product.price) >= parseFloat(filters.minPrice) &&
          parseFloat(product.price) <= parseFloat(filters.maxPrice)
        );
      });
    }
    if (filters.brand) {
      productList = productList.filter((product) =>
        filters.brand.includes(product.details.brand.toLowerCase()),
      );
    }

    return productList;
  };

  const handleSearch = (productList) => {
    let searchedName = searchParams.get('name');

    if (!searchedName) return productList;

    return productList.filter((product) =>
      product.name
        .toLowerCase()
        .includes(decodeURIComponent(searchedName.toLowerCase())),
    );
  };

  const applyFiltering = () => {
    let filteredProducts = handleCategory();
    filteredProducts = handleFilter(filteredProducts);
    filteredProducts = handleSearch(filteredProducts);

    switch (sorting) {
      case SortStates.NAME_ASC:
        return filteredProducts.sort((a, b) => sortName(a, b));
      case SortStates.NAME_DESC:
        return filteredProducts.sort((a, b) => sortName(b, a));
      case SortStates.PRICE_ASC:
        return filteredProducts.sort((a, b) => a.price - b.price);
      case SortStates.PRICE_DESC:
        return filteredProducts.sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  };

  useEffect(() => {
    setSorting('name(asc)');
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
          <option value={SortStates.NAME_ASC}>Name: A-Z</option>
          <option value={SortStates.NAME_DESC}>Name: Z-A</option>
          <option value={SortStates.PRICE_ASC}>Price: Low to High</option>
          <option value={SortStates.PRICE_DESC}>Price: High to Low</option>
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
          ? applyFiltering().map((product) => (
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
