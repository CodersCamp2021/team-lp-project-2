import { useEffect, useState } from 'react';

export const delayLoading = (loadingSetter, dependency) => {
  return setTimeout(() => {
    if (dependency) {
      loadingSetter(false);
    } else delayLoading(loadingSetter, dependency);
  }, 200);
};

// Source and explanation of the debounce hook: https://dmitripavlutin.com/controlled-inputs-using-react-hooks/#4-debouncing-the-controlled-input
export function useDebouncedValue(value, wait) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(id); //eslint-disable-next-line
  }, [value]);
  return debouncedValue;
}
