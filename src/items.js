import { addDoc, collection, getFirestore } from 'firebase/firestore';
import app from './firebase';

const addProduct = () => {
  const products = [
    /*
     * AMD CPU
     */
    {
      name: 'AMD Ryzen 5 3600 Processor',
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
    /*
     * INTEL CPU
     */
    {
      name: 'Intel Core i9-9900K Processor',
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
    /*
     * GPU Cards
     */
    {
      name: 'Gigabyte GeForce RTX 3070 Ti',
      price: 1180.99,
      images: [],
      details: {
        brand: 'Gigabyte',
        ramType: 'GDDR6X',
        ramSize: 8,
        memoryClockSpeed: 19000,
        gpuClockSpeed: 1830,
        displayMaxRes: '7680 x 4320 Pixels',
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
