import React, { useEffect } from 'react';
import Group from './Group';

export default function Options({
  state,
  setStateCallback,
  category,
  pricing,
}) {
  const [minPrice, maxPrice] = pricing;
  const categoryList = {
    cpu: ['Intel', 'AMD'],
    gpu: ['Asus', 'Gigabyte', 'MSI'],
    monitor: ['Asus', 'Dell', 'HP', 'Sceptre', 'LG', 'Samsung'],
    motherboard: ['Asus', 'MSI'],
    ram: ['Patriot Memory', 'Corsair', 'HyperX', 'Crucial', 'Kingston'],
  };

  useEffect(() => {
    setStateCallback({ ...state, pricing });
  }, [minPrice, maxPrice]);

  return (
    <Group
      title={category ? 'Brands' : ''}
      options={category ? categoryList[category] : []}
      callback={(arr) => setStateCallback({ ...state, brands: arr })}
    ></Group>
  );
}
