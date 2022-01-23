import React, { useState } from 'react';
import Group from './Group';

export default function Options({ category }) {
  const [state, setState] = useState({ cpu: [], gpu: [] });
  console.log(state);

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
    default: {
      return <></>;
    }
  }
}
