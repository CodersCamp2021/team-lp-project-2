import React, { useEffect, useState } from 'react';
import Group from './Group';

export default function Options({
  state,
  setStateCallback,
  category,
  pricing,
}) {
  const [minPrice, maxPrice] = pricing;

  useEffect(() => {
    setStateCallback({ ...state, pricing });
  }, [minPrice, maxPrice]);

  switch (category) {
    case 'cpu': {
      return (
        <Group
          title={'Brands'}
          options={['Intel', 'AMD']}
          callback={(arr) => setStateCallback({ ...state, brands: arr })}
        ></Group>
      );
    }
    case 'gpu': {
      return (
        <Group
          title={'Brands'}
          options={['Asus', 'Gigabyte', 'MSI']}
          callback={(arr) => setStateCallback({ ...state, brands: arr })}
        ></Group>
      );
    }
    case 'monitor': {
      return (
        <Group
          title={'Brands'}
          options={['Asus', 'Dell', 'HP', 'Sceptre', 'LG', 'Samsung']}
          callback={(arr) => setStateCallback({ ...state, brands: arr })}
        ></Group>
      );
    }
    case 'motherboard': {
      return (
        <Group
          title={'Brands'}
          options={['Asus', 'MSI']}
          callback={(arr) => setStateCallback({ ...state, brands: arr })}
        ></Group>
      );
    }
    case 'ram': {
      return (
        <Group
          title={'Brands'}
          options={[
            'Patriot Memory',
            'Corsair',
            'HyperX',
            'Crucial',
            'Kingston',
          ]}
          callback={(arr) => setStateCallback({ ...state, brands: arr })}
        ></Group>
      );
    }
    default: {
      return <></>;
    }
  }
}
