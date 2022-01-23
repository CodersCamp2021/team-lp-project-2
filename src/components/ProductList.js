import { Link, useParams } from 'react-router-dom';
import { SimpleGrid, Box, Text, Flex, Heading } from '@chakra-ui/react';
import { TEST_ITEMS } from '../DummyItems';
import { useContext, useEffect } from 'react';
import { CategoryContext } from './DummyStore';
import queryString from 'query-string';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../firebase';

const ProductList = () => {
  let { category } = useParams();
  const updateCategory = useContext(CategoryContext);
  const queryParams = queryString.parse(window.location.search); // list of all query params as {key: value}
  const db = getFirestore(app);

  const getAllProducts = () => {
    const booksRef = collection(db, 'products');
    getDocs(booksRef).then((snapshot) => {
      let product = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        product.push({ ...data, id: doc.id });
      });
      return product;
    });
  };

  const categoryFilter = () => {
    if (category) {
      console.log(1);
      return getAllProducts().filter(
        (product) => product.type.toLowerCase() === category.toLowerCase(),
      );
    } else {
      console.log(2);
      return getAllProducts();
    }
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
        {categoryFilter().map((product) => (
          <Link key={product.name} to={`/store/product/${product.name}`}>
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
              <Text fontSize="md">{product.brand}</Text>
              {/* <Text fontSize="md">{product.details.brand}</Text> */}
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductList;
