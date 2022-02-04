import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import MenuLinks from './MenuLinks';
import SearchBar from './SearchBar';

const Navbar = ({ openCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      gap="20px"
      px={{ base: '30px', md: '80px' }}
      py="50px"
      width="100%"
      height="80px"
      mb={{ base: '100px', md: '5' }}
      bg="#f1f1f1"
      borderBottom="1px solid #ccc"
      zIndex="10"
    >
      <Logo closeMenu={handleCloseMenu} />
      <SearchBar isMenuOpen={isMenuOpen} />
      <MenuLinks
        isMenuOpen={isMenuOpen}
        closeMenu={handleCloseMenu}
        openCart={openCart}
      />
      <MenuIcon
        isMenuOpen={isMenuOpen}
        openMenu={handleOpenMenu}
        closeMenu={handleCloseMenu}
      />
    </Flex>
  );
};

export default Navbar;
