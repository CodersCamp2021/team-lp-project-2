import { addDoc, collection, getFirestore } from 'firebase/firestore';
import app from './firebase';

const addProduct = () => {
  const products = [
    /**
     * AMD CPU
     */
    {
      name: 'AMD Ryzen 5 3600',
      type: 'cpu',
      price: 263,
      images: [],
      details: {
        brand: 'AMD',
        model: 'Ryzen 5 3600',
        cpuSpeed: 3.36,
        cpuSocket: 'Socket AM4',
        wattage: 65,
        cacheSize: 32,
        processorCount: 6,
      },
    },
    {
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
      },
    },
    {
      name: 'AMD Ryzen 3 3200G',
      type: 'cpu',
      price: 189.99,
      images: [],
      details: {
        brand: 'AMD',
        model: 'Ryzen 3 3200G',
        cpuSpeed: 3.6,
        cpuSocket: 'Socket AM4',
        wattage: 65,
        cacheSize: 4,
        processorCount: 4,
      },
    },
    {
      name: 'AMD Ryzen 5 3600X',
      type: 'cpu',
      price: 321.18,
      images: [],
      details: {
        brand: 'AMD',
        model: 'Ryzen 5 3600X',
        cpuSpeed: 3.8,
        cpuSocket: 'Socket AM4',
        wattage: 95,
        cacheSize: 32,
        processorCount: 6,
      },
    },
    {
      name: 'AMD Ryzen 7 5800X',
      type: 'cpu',
      price: 329.78,
      images: [],
      details: {
        brand: 'AMD',
        model: 'Ryzen 7 5800X',
        cpuSpeed: 3.8,
        cpuSocket: 'Socket AM4',
        wattage: 105,
        cacheSize: 36,
        processorCount: 8,
      },
    },
    {
      name: 'AMD Ryzen 5 5600X',
      type: 'cpu',
      price: 288.89,
      images: [],
      details: {
        brand: 'AMD',
        model: 'Ryzen 5 5600X',
        cpuSpeed: 4.6,
        cpuSocket: 'Socket AM4',
        wattage: 65,
        cacheSize: 35,
        processorCount: 6,
      },
    },
    /**
     * INTEL CPU
     */
    {
      name: 'Intel Core i9-9900K',
      type: 'cpu',
      price: 384.41,
      images: [
        'Intel Core i9-9900K%2F1.jpg',
        'Intel Core i9-9900K%2F2.jpg',
        'Intel Core i9-9900K%2F3.jpg',
      ],
      details: {
        brand: 'Intel',
        model: 'Core i9',
        cpuSpeed: 5,
        cpuSocket: 'LGA 1151',
        wattage: 95,
        cacheSize: 16,
        processorCount: 1,
      },
    },
    {
      name: 'Intel Core i9-9900KF',
      type: 'cpu',
      price: 276.32,
      images: ['Intel Core i9-9900KF%2F1.jpg', 'Intel Core i9-9900KF%2F2.jpg'],
      details: {
        brand: 'Intel',
        model: 'A8-7600',
        cpuSpeed: 3.4,
        cpuSocket: 'LGA 1151',
        wattage: 95,
        cacheSize: 16,
        processorCount: 8,
      },
    },
    {
      name: 'Intel Core I5-9600K',
      type: 'cpu',
      price: 202.02,
      images: ['Intel Core I5-9600K%2F1.jpg', 'Intel Core I5-9600K%2F2.jpg'],
      details: {
        brand: 'Intel',
        model: 'Core i5 Family',
        cpuSpeed: 3.7,
        cpuSocket: 'LGA 1151',
        wattage: 95,
        cacheSize: 9,
        processorCount: 6,
      },
    },
    {
      name: 'Intel Core i7-9700F',
      type: 'cpu',
      price: 289.39,
      images: [
        'Intel Core i7-9700F%2F1.jpg',
        'Intel Core i7-9700F%2F2.jpg',
        'Intel Core i7-9700F%2F3.jpg',
      ],
      details: {
        brand: 'Intel',
        model: 'Core i7 Family',
        cpuSpeed: 3,
        cpuSocket: 'LGA 1151',
        wattage: 65,
        cacheSize: 2,
        processorCount: 8,
      },
    },
    {
      name: 'Intel Core i3-9100F',
      type: 'cpu',
      price: 141.44,
      images: [
        'Intel Core i3-9100F%2F1.jpg',
        'Intel Core i3-9100F%2F2.jpg',
        'Intel Core i3-9100F%2F3.jpg',
      ],
      details: {
        brand: 'Intel',
        model: '5X86',
        cpuSpeed: 3.6,
        cpuSocket: 'LGA 1151',
        wattage: 65,
        cacheSize: 6,
        processorCount: 4,
      },
    },
    {
      name: 'Intel Core i5-10400F',
      type: 'cpu',
      price: 151.0,
      images: [
        'Intel Core i5-10400F%2F1.jpg',
        'Intel Core i5-10400F%2F2.jpg',
        'Intel Core i5-10400F%2F3.jpg',
      ],
      details: {
        brand: 'Intel',
        model: 'Core i5 Family',
        cpuSpeed: 2.9,
        cpuSocket: 'LGA 1200',
        wattage: 65,
        cacheSize: 12,
        processorCount: 6,
      },
    },
    /**
     * GPU Cards
     */
    {
      name: 'Gigabyte GeForce RTX 3070 Ti',
      type: 'gpu',
      price: 1180.99,
      images: [],
      details: {
        brand: 'Gigabyte',
        ramType: 'GDDR6X',
        ramSize: 8,
        memoryClockSpeed: 19000,
        gpuClockSpeed: 1830,
      },
    },
    {
      name: 'MSI GeForce RTX 3070',
      type: 'gpu',
      price: 1180.99,
      images: [],
      details: {
        brand: 'MSI',
        ramType: 'GDDR6',
        ramSize: 8,
        memoryClockSpeed: 1845,
        gpuClockSpeed: 1845,
      },
    },
    {
      name: 'ASUS Cerberus GeForce GTX 1050 Ti',
      type: 'gpu',
      price: 399.0,
      images: [],
      details: {
        brand: 'ASUS',
        ramType: 'GDDR5',
        ramSize: 4,
        memoryClockSpeed: 7008,
        gpuClockSpeed: 1341,
      },
    },
    {
      name: 'MSI GeForce GTX 1060',
      type: 'cpu',
      price: 539.0,
      images: [],
      details: {
        brand: 'MSI',
        ramType: 'GDDR5',
        ramSize: 6,
        memoryClockSpeed: 8192,
        gpuClockSpeed: 1594,
      },
    },
    {
      name: 'ZOTAC GeForce RTX 3060',
      type: 'cpu',
      price: 849.0,
      images: [],
      details: {
        brand: 'ZOTAC',
        ramType: 'GDDR6',
        ramSize: 12,
        memoryClockSpeed: 15000,
        gpuClockSpeed: 1807,
      },
    },
    /**
     * RAM CHIPS
     */
    {
      name: 'Corsair CMW16GX4M2C3200C16 Vengeance',
      type: 'ram',
      price: 67.61,
      images: [],
      details: {
        brand: 'Corsair',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 3200,
      },
    },
    {
      name: 'HyperX Fury HX426C16FB3AK2',
      type: 'ram',
      price: 115.91,
      images: [],
      details: {
        brand: 'HyperX',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 2666,
      },
    },
    {
      name: 'Crucial CT16G4SFD824A SODIMM',
      type: 'ram',
      price: 72.99,
      images: [],
      details: {
        brand: 'Crucial',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 2400,
      },
    },
    {
      name: 'Patriot Viper 4 PV48G300C6K',
      type: 'ram',
      price: 39.99,
      images: [],
      details: {
        brand: 'Patriot Memory',
        ramMemoryTechnology: 'DDR4',
        memorySize: 8,
        memorySpeed: 3000,
      },
    },
    /**
     * MOTHERBOARDS
     */
    {
      name: 'ROG STRIX B550-F GAMING',
      type: 'motherboard',
      price: 144.99,
      images: [
        'ROG STRIX B550-F GAMING%2F1.jpg',
        'ROG STRIX B550-F GAMING%2F2.jpg',
        'ROG STRIX B550-F GAMING%2F3.jpg',
      ],
      details: {
        brand: 'ASUS',
        cpuSocket: 'Socket AM4',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'AMD B550',
        series: 'ROG STRIX B550-F GAMING',
      },
    },
    {
      name: 'ROG Maximus XIII Hero',
      type: 'motherboard',
      price: 353.43,
      images: [
        'ROG Maximus XIII Hero%2F1.jpg',
        'ROG Maximus XIII Hero%2F2.jpg',
        'ROG Maximus XIII Hero%2F3.jpg',
      ],
      details: {
        brand: 'ASUS',
        cpuSocket: 'LGA 1200',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'AMD A55',
        series: '90MB15X0-M0EAY0',
      },
    },
    {
      name: 'ASUS ROG Crosshair VIII Formula',
      type: 'motherboard',
      price: 96.99,
      images: [
        'ASUS ROG Crosshair VIII Formula%2F1.jpg',
        'ASUS ROG Crosshair VIII Formula%2F2.jpg',
        'ASUS ROG Crosshair VIII Formula%2F3.jpg',
      ],
      details: {
        brand: 'ASUS',
        cpuSocket: 'Socket AM4',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'X570',
      },
    },
    {
      name: 'ASUS TUF Gaming B450M-PLUS II',
      type: 'motherboard',
      price: 83.95,
      images: [
        'ASUS TUF Gaming B450M-PLUS II%2F1.jpg',
        'ASUS TUF Gaming B450M-PLUS II%2F2.jpg',
        'ASUS TUF Gaming B450M-PLUS II%2F3.jpg',
      ],
      details: {
        brand: 'ASUS',
        cpuSocket: 'Socket AM4',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'AMD B450',
        series: 'TUF GAMING B450M-PLUS II',
      },
    },
    {
      name: 'ASUS Prime H410M-A',
      type: 'motherboard',
      price: 84.99,
      images: [
        'ASUS Prime H410M-A%2F1.jpg',
        'ASUS Prime H410M-A%2F2.jpg',
        'ASUS Prime H410M-A%2F3.jpg',
      ],
      details: {
        brand: 'Asus',
        cpuSocket: 'LGA 1200',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'Intel H410',
        series: 'PRIME H410M-A/CSM',
      },
    },
    {
      name: 'ASUS Prime B560-PLUS',
      type: 'motherboard',
      price: 119.99,
      images: [
        'ASUS Prime B560-PLUS%2F1.jpg',
        'ASUS Prime B560-PLUS%2F2.jpg',
        'ASUS Prime B560-PLUS%2F3.jpg',
      ],
      details: {
        brand: 'Asus',
        cpuSocket: 'LGA 1200',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'Intel B560',
        series: 'PRIME B560-PLUS',
      },
    },
  ];

  /*
   * DO NOT UNCOMMENT!!!
   */

  // const db = getFirestore(app);
  // const productRef = collection(db, 'products');
  // products.forEach(product => {
  //   addDoc(productRef, product)
  // })
};
