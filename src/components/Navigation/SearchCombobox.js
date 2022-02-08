import React, { useState, useContext } from 'react';
import { useCombobox } from 'downshift';
import { AllProductsContext } from '../App';
import { Input, List, ListItem, Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

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
  ({ itemIndex, highlightedIndex, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <ListItem
        transition="background-color 220ms, color 220ms"
        bg={isActive ? 'purple.100' : '#f1f1f1'}
        px={3}
        py={3}
        cursor="pointer"
        borderWidth="1px"
        borderColor="blackAlpha.300"
        {...props}
        ref={ref}
      />
    );
  },
);

const SearchCombobox = () => {
  const products = useContext(AllProductsContext);
  const [inputItems, setInputItems] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const handleInputValueChange = ({ inputValue }) => {
    if (inputValue.length === 0) {
      setInputItems([]);
    }

    if (inputValue.length > 2) {
      setInputItems(
        products.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
    }
  };

  const handleSelectedItemChange = ({ selectedItem }) => {
    setSelectedState('');
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
    itemToString: (item) => (item ? item.name : ''),
    onInputValueChange: handleInputValueChange,
    onSelectedItemChange: handleSelectedItemChange,
  });
  return (
    <Box {...getComboboxProps()} position="relative" w="100%">
      <ComboboxInput
        {...getInputProps()}
        placeholder="Search for products..."
        borderColor="blackAlpha.500"
        focusBorderColor="blackAlpha.700"
        borderRadius="20px"
        maxWidth="600px"
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
        borderBottom={inputItems.length > 0 ? '1px solid gray' : 'none'}
      >
        {inputItems.map((item, index) => (
          <ComboboxItem
            {...getItemProps({ item, index })}
            itemIndex={index}
            highlightedIndex={highlightedIndex}
            key={item.name + index}
          >
            <Text isTruncated>{item.name}</Text>
          </ComboboxItem>
        ))}
      </ComboboxList>
    </Box>
  );
};

export default SearchCombobox;
