import React, { useState, useEffect, useContext } from 'react';
import { useCombobox } from 'downshift';
import { AllProductsContext } from '../App';
import { Input, List, ListItem, Box, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

/* Downshift useCombobox documentation: https://www.downshift-js.com/use-combobox

ChakraUI + Downshift implementation based on: 
https://codesandbox.io/s/mkvj7?file=/src/Combobox.js
*/
const ComboboxInput = React.forwardRef(({ ...props }, ref) => {
  return <Input {...props} ref={ref} />;
});

const ComboboxList = React.forwardRef(({ isOpen, ...props }, ref) => {
  return <List display={isOpen ? null : 'none'} {...props} ref={ref} />;
});

const ComboboxItem = React.forwardRef(
  ({ itemIndex, highlightedIndex, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <ListItem
        transition="background-color 220ms, color 220ms"
        bg={isActive ? 'purple.100' : 'white'}
        px={4}
        py={2}
        cursor="pointer"
        {...props}
        ref={ref}
      />
    );
  },
);

// Source and explanation of debounce hook => https://dmitripavlutin.com/controlled-inputs-using-react-hooks/#4-debouncing-the-controlled-input
const useDebouncedValue = (value, wait) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(id);
  }, [value]);
  return debouncedValue;
};

const SearchCombobox = () => {
  const products = useContext(AllProductsContext);
  const [selectedState, setSelectedState] = useState(null);
  const [inputItems, setInputItems] = useState(products);
  const productsNames = products.map((product) => product.name);
  // const debouncedInput = useDebouncedValue(searchInput, 500);const [selectedState, setSelectedState] = useState(null);
  const navigate = useNavigate();
  const handleSelectedItemChange = ({ selectedItem }) => {
    setSelectedState(selectedItem.name);
    navigate(`/store/product/${selectedItem.id}`);
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    selectedItem: selectedState,
    onInputValueChange: ({ inputValue }) => {
      if (inputValue.length > 2) {
        setInputItems(
          products.filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase()),
          ),
        );
      }
    },
    onSelectedItemChange: handleSelectedItemChange,
  });
  return (
    <Box {...getComboboxProps()} direction="column" justify="center">
      <ComboboxInput
        {...getInputProps()}
        placeholder="Search for products..."
        borderColor="blackAlpha.500"
        focusBorderColor="blackAlpha.900"
        borderRadius="20px"
        width="500px"
        maxWidth="600px"
      />
      <ComboboxList
        mt="1px"
        width="450px"
        position="static"
        maxHeight="10rem"
        isOpen={isOpen}
        {...getMenuProps()}
        overflowY="auto"
        bg="white"
        zIndex="999"
        border="1px solid black"
      >
        {inputItems.map((item, index) => (
          <ComboboxItem
            {...getItemProps({ item, index })}
            itemIndex={index}
            highlightedIndex={highlightedIndex}
            key={item.name + index}
          >
            {item.name}
          </ComboboxItem>
        ))}
      </ComboboxList>
    </Box>
  );
};

const ControlledCombobox = () => {
  const [selectedState, setSelectedState] = useState(null);
  const navigate = useNavigate();
  const handleSelectedItemChange = ({ selectedItem }) => {
    setSelectedState(selectedItem.name);
    navigate(`/store/product/${selectedItem.id}`);
  };

  return (
    <SearchCombobox
      selectedItem={selectedState}
      handleSelectedItemChange={handleSelectedItemChange}
    />
  );
};

export default SearchCombobox;
