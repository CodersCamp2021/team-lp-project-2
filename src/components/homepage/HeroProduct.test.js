import HeroProduct from './HeroProduct';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const mockProducts = [
  {
    id: 1,
    name: 'AMD Ryzen 5 3600',
    type: 'cpu',
    price: 263,
    images: [
      'AMD Ryzen 5 3600%2F1.jpg',
      'AMD Ryzen 5 3600%2F2.jpg',
      'AMD Ryzen 5 3600%2F3.jpg',
    ],
    details: {
      brand: 'AMD',
      model: 'Ryzen 5 3600',
      cpuSpeed: 3.36,
      cpuSocket: 'Socket AM4',
      wattage: 65,
      cacheSize: 32,
      processorCount: 6,
      showOnHomepage: false,
    },
  },
  {
    id: 2,
    name: 'AMD Ryzen 7 3800X',
    type: 'cpu',
    price: 258,
    images: [
      'AMD Ryzen 7 3800X%2F1.jpg',
      'AMD Ryzen 7 3800X%2F2.jpg',
      'AMD Ryzen 7 3800X%2F3.jpg',
    ],
    details: {
      brand: 'AMD',
      model: 'Ryzen 7 3800X',
      cpuSpeed: 3.9,
      cpuSocket: 'Socket AM4',
      wattage: 105,
      cacheSize: 32,
      processorCount: 8,
      showOnHomepage: true,
      description:
        'The AMD Ryzen 7 3800X processor will take you to a new level of performance.\
      This powerful CPU has 8 cores with a base clock frequency of 3.90 GHz. In Turbo mode, it \
      accelerates to 4.50 GHz, providing enormous power for smooth gaming and flawless multitasking \
      of advanced operations. The unit draws on the entire spectrum of possibilities of the Zen 2 \
      architecture, it is cooled by the Wraith Prism fan with RGB LED lighting.',
    },
  },
  {
    id: 3,
    name: 'AMD Ryzen 3 3200G',
    type: 'cpu',
    price: 189.99,
    images: [
      'AMD Ryzen 3 3200G%2F1.jpg',
      'AMD Ryzen 3 3200G%2F2.jpg',
      'AMD Ryzen 3 3200G%2F3.jpg',
    ],
    details: {
      brand: 'AMD',
      model: 'Ryzen 3 3200G',
      cpuSpeed: 3.6,
      cpuSocket: 'Socket AM4',
      wattage: 65,
      cacheSize: 4,
      processorCount: 4,
      showOnHomepage: false,
    },
  },
];

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('Render HeroProduct component corectly', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <HeroProduct heroProducts={mockProducts} />
      </BrowserRouter>
      ,
    </ChakraProvider>,
  );
  const heroProduct = screen.getByTestId('HeroProduct');
  expect(heroProduct).toBeInTheDocument();
});

test('Render CarouselButton component corectly', () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <HeroProduct heroProducts={mockProducts} />
      </BrowserRouter>
    </ChakraProvider>,
  );
  const applyButtons = screen.getAllByRole('button');
  applyButtons.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});
