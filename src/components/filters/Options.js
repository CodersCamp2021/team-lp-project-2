import React, { useEffect, useState } from 'react';
import Group from './Group';

export default function Options({ category, pricing }) {
  const [state, setState] = useState({ pricing });
  const [minPrice, maxPrice] = pricing;

  console.log(state);

  useEffect(() => {
    setState({ ...state, pricing });
  }, [minPrice, maxPrice]);

  switch (category) {
    case 'cpu': {
      return (
        <Group
          title={'Brands'}
          options={['Intel', 'AMD']}
          callback={(arr) => setState({ ...state, brands: arr })}
        ></Group>
      );
    }
    case 'gpu': {
      return (
        <Group
          title={'Brands'}
          options={['Asus', 'Gigabyte', 'MSI']}
          callback={(arr) => setState({ ...state, brands: arr })}
        ></Group>
      );
    }
    case 'monitor': {
      return (
        <Group
          title={'Brands'}
          options={['Asus', 'Dell', 'HP', 'Sceptre', 'LG', 'Samsung']}
          callback={(arr) => setState({ ...state, brands: arr })}
        ></Group>
      );
    }
    case 'motherboard': {
      return (
        <Group
          title={'Brands'}
          options={['Asus', 'MSI']}
          callback={(arr) => setState({ ...state, brands: arr })}
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
          callback={(arr) => setState({ ...state, brands: arr })}
        ></Group>
      );
    }
    default: {
      return <></>;
    }
  }
}