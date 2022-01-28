import React, { useEffect } from 'react';
import Group from './Group';

export default function Options({
  details,
  setDetailsCallback,
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
    setDetailsCallback({ ...details, pricing });
  }, [minPrice, maxPrice]);

  return (
    <Group
      title={category ? 'Brands' : ''}
      options={category ? categoryList[category] : []}
      callback={(arr) => setDetailsCallback({ ...details, brands: arr })}
    ></Group>
  );
}
