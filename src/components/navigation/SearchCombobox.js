import React, { useState, useContext, useEffect } from 'react';
import { useCombobox } from 'downshift';
import { AllProductsContext } from '../App';
import { Input, List, ListItem, Box, Text } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDebouncedValue } from '../utils';

const CategoryDictionary = Object.freeze({
  cpu: 'CPUs',
  gpu: 'GPUs',
  monitor: 'Monitors',
  ram: 'Memory',
  motherboard: 'Motherboards',
});

/* 
Downshift useCombobox documentation: https://www.downshift-js.com/use-combobox

ChakraUI + Downshift implementation based on: 
https://codesandbox.io/s/mkvj7?file=/src/Combobox.js
*/

const ComboboxInput = React.forwardRef(({ ...props }, ref) => {
  return <Input {...props} ref={ref} w="90%" />;
});

const ComboboxList = React.forwardRef(({ isOpen, ...props }, ref) => {
  return <List display={isOpen ? null : 'none'} {...props} ref={ref} />;
});

const ComboboxItem = React.forwardRef(
  ({ itemIndex, highlightedIndex, itemCategory, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <Box position="relative">
        <ListItem
          transition="background-color 220ms, color 220ms"
          bg={isActive ? 'purple.200' : '#f1f1f1'}
          textShadow={isActive && '0 0 1px black, 1px 0 0 black'}
          pl={3}
          py={4}
          cursor="pointer"
          borderWidth="1px"
          borderColor="blackAlpha.300"
          {...props}
          ref={ref}
        />
        <Text
          userSelect="none"
          position="absolute"
          fontSize="xs"
          fontWeight="semibold"
          color="blackAlpha.500"
          right="4px"
          bottom="2px"
        >
          in: "{CategoryDictionary[itemCategory]}"
        </Text>
      </Box>
    );
  },
);

const SearchCombobox = () => {
  const products = useContext(AllProductsContext);
  const [inputItems, setInputItems] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();
  const debouncedItems = useDebouncedValue(inputItems, 500);

  const handleInputValueChange = ({ inputValue }) => {
    if (inputValue.length === 0) {
      setInputItems([]);
    }

    if (inputValue.length > 2) {
      setInputItems(
        products.filter((item) =>
          item.name.toLowerCase().includes(inputValue.trim().toLowerCase()),
        ),
      );
    }
  };

  const handleSelectedItemChange = ({ selectedItem }) => {
    navigate(`/store/product/${selectedItem.id}`);
  };

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    setInputValue,
  } = useCombobox({
    items: inputItems,
    itemToString: (item) => (item ? item.name : ''),
    onInputValueChange: handleInputValueChange,
    onSelectedItemChange: handleSelectedItemChange,
  });

  useEffect(() => {
    setInputValue('');
    // eslint-disable-next-line
  }, [location]);

  return (
    <Box
      {...getComboboxProps()}
      position="relative"
      w={{ base: '80%', md: '100%' }}
    >
      <ComboboxInput
        {...getInputProps()}
        placeholder="Search for products..."
        borderColor="blackAlpha.500"
        focusBorderColor="blackAlpha.700"
        borderRadius="20px"
        maxWidth="600px"
        maxLength="80"
      />
      <ComboboxList
        mt="1px"
        position="relative"
        zIndex="11"
        width="85%"
        maxHeight="15rem"
        isOpen={isOpen}
        {...getMenuProps()}
        overflowY="auto"
        borderRadius="5px"
        borderBottom={debouncedItems.length > 0 ? '1px solid gray' : 'none'}
      >
        {debouncedItems.map((item, index) => (
          <ComboboxItem
            {...getItemProps({ item, index })}
            itemIndex={index}
            highlightedIndex={highlightedIndex}
            itemCategory={item.type}
            key={item.name + index}
            display="flex"
            justifyContent="space-between"
          >
            <Text isTruncated w="70%" textAlign="left">
              {item.name}
            </Text>
            <Text
              fontSize="0.95rem"
              textShadow={index === highlightedIndex && '0 0 1px black'}
              textAlign="right"
              pr={2}
            >
              ${item.price.toFixed(2)}
            </Text>
          </ComboboxItem>
        ))}
      </ComboboxList>
    </Box>
  );
};

export default SearchCombobox;
