import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import MenuLinks from './MenuLinks';
import StoreActions from './StoreActions';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobileView = windowWidth < 750;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    console.log(windowWidth);
  });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      gap="20px"
      pl="80px"
      pr="80px"
      width="100%"
      height="80px"
    >
      <Logo />
      <MenuLinks isMobileView={isMobileView} />
      {!isMobileView && <StoreActions />}
      {isMobileView && (
        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </Flex>
  );
};

export default Navbar;
