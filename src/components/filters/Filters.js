import React, { useState } from 'react';
import Options from './Options';
import {
  Flex,
  RangeSlider,
  Text,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Divider,
} from '@chakra-ui/react';

export default function Filters({ products, category }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(400);
  const primaryMin = 0;
  const primaryMax = 400;

  return (
    <Flex
      p={5}
      w="20%"
      bg="#f1f1f1"
      direction="column"
      justify="center"
      align="flex-start"
    >
      <Text pl="2%" fontSize="2xl" fontWeight="bold">
        Filters
      </Text>
      <Text p="3%" fontSize="xl">
        Price
      </Text>

      <RangeSlider
        alignSelf="center"
        w="70%"
        defaultValue={[minPrice, maxPrice]}
        min={primaryMin}
        max={primaryMax}
        step={50}
        onChangeEnd={(val) => {
          setMinPrice(val[0]);
          setMaxPrice(val[1]);
        }}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={4} index={0} />
        <RangeSliderThumb boxSize={4} index={1} />
      </RangeSlider>
      <Text pl="3%">Minimum price: {minPrice}</Text>
      <Text pl="3%">Maximum price: {maxPrice}</Text>
      <Divider />
      <Options category={category} pricing={[minPrice, maxPrice]} />
    </Flex>
  );
}
