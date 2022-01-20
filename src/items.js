import { addDoc, collection, getFirestore } from 'firebase/firestore';
import app from './firebase';

const addProduct = () => {
  const products = [
    /**
     * AMD CPU
     */
    {
      name: 'AMD Ryzen 5 3600 Processor',
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
      name: 'AMD Ryzen 7 3800X Processor',
      type: 'cpu',
      price: 258,
      images: [],
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
      name: 'AMD Ryzen 3 3200G Processor',
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
      name: 'AMD Ryzen 5 3600X Processor',
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
      name: 'AMD Ryzen 7 5800X Processor',
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
    /**
     * INTEL CPU
     */
    {
      name: 'Intel Core i9-9900K Processor',
      type: 'cpu',
      price: 384.41,
      images: [],
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
      name: 'Intel Core i9-9900KF Processor',
      type: 'cpu',
      price: 276.32,
      images: [],
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
      name: 'Intel Core I5-9600K Processor',
      type: 'cpu',
      price: 202.02,
      images: [],
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
      name: 'Intel Core i7-9700F Processor',
      type: 'cpu',
      price: 289.39,
      images: [],
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
      name: 'Intel Core i3-9100F Processor',
      type: 'cpu',
      price: 141.44,
      images: [],
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
    /**
     * MOTHERBOARDS
     */
    {
      name: 'ROG STRIX B550-F GAMING',
      type: 'motherboard',
      price: 144.99,
      images: [],
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
      images: [],
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
      images: [],
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
      images: [],
      details: {
        brand: 'ASUS',
        cpuSocket: 'Socket AM4',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'AMD B450',
        series: 'TUF GAMING B450M-PLUS II',
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
