import React from 'react';
import {Stack, Link} from '@chakra-ui/react';

const MenuLinks = () => {
  return (
  <Stack direction="row" gap="30px">
    <Link href="/" fontSize="xl">
        Home
    </Link>
    <Link href="/" fontSize="xl">
        Store
    </Link>
  </Stack>
);
};

export default MenuLinks;
