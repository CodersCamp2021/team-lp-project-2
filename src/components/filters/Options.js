import React, { useEffect, useState } from 'react';
import Group from './Group';

export default function Options({ category, pricing }) {
  const [state, setState] = useState({ pricing });
  const [minPrice, maxPrice] = pricing;

  useEffect(() => {
    setState({ ...state, pricing });
  }, [minPrice, maxPrice]);

  switch (category) {
    case 'cpu': {
      return (
        <Group
          title={'Brands'}
          options={['Intel', 'AMD']}
          callback={(arr) => setState({ ...state, cpu: arr })}
        ></Group>
      );
    }
    case 'gpu': {
      return (
        <Group
          title={'Brands'}
          options={['Asus', 'Gigabyte', 'MSI']}
          callback={(arr) => setState({ ...state, gpu: arr })}
        ></Group>
      );
    }
    default: {
      return <></>;
    }
  }
}
