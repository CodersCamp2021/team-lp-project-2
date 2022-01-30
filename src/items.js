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
      images: [
        'AMD Ryzen 5 3600%2F1.png',
        'AMD Ryzen 5 3600%2F2.png',
        'AMD Ryzen 5 3600%2F3.png',
      ],
      details: {
        brand: 'AMD',
        model: 'Ryzen 5 3600',
        cpuSpeed: 3.36,
        cpuSocket: 'Socket AM4',
        wattage: 65,
        cacheSize: 32,
        processorCount: 6,
        showOnHomepage: false
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
        showOnHomepage: false
      },
    },
    {
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
        showOnHomepage: false
      },
    },
    {
      name: 'AMD Ryzen 5 3600X',
      type: 'cpu',
      price: 321.18,
      images: [
        'AMD Ryzen 5 3600X%2F1.jpg',
        'AMD Ryzen 5 3600X%2F2.jpg',
        'AMD Ryzen 5 3600X%2F3.jpg',
      ],
      details: {
        brand: 'AMD',
        model: 'Ryzen 5 3600X',
        cpuSpeed: 3.8,
        cpuSocket: 'Socket AM4',
        wattage: 95,
        cacheSize: 32,
        processorCount: 6,
        showOnHomepage: false
      },
    },
    {
      name: 'AMD Ryzen 7 5800X',
      type: 'cpu',
      price: 329.78,
      images: [
        'AMD Ryzen 7 5800X%2F1.jpg',
        'AMD Ryzen 7 5800X%2F2.jpg',
        'AMD Ryzen 7 5800X%2F3.jpg',
      ],
      details: {
        brand: 'AMD',
        model: 'Ryzen 7 5800X',
        cpuSpeed: 3.8,
        cpuSocket: 'Socket AM4',
        wattage: 105,
        cacheSize: 36,
        processorCount: 8,
        showOnHomepage: false
      },
    },
    {
      name: 'AMD Ryzen 5 5600X',
      type: 'cpu',
      price: 288.89,
      images: [
        'AMD Ryzen 5 5600X%2F1.jpg',
        'AMD Ryzen 5 5600X%2F2.jpg',
        'AMD Ryzen 5 5600X%2F3.jpg',
      ],
      details: {
        brand: 'AMD',
        model: 'Ryzen 5 5600X',
        cpuSpeed: 4.6,
        cpuSocket: 'Socket AM4',
        wattage: 65,
        cacheSize: 35,
        processorCount: 6,
        showOnHomepage: false
      },
    },
    /**
     * INTEL CPU
     */
    {
      name: 'Intel Core i7-11700K',
      type: 'cpu',
      price: 1649,
      images: [
        'Intel Core i7-11700K%2F1.jpg',
        'Intel Core i7-11700K%2F2.jpg',
        'Intel Core i7-11700K%2F3.jpg',
      ],
      details: {
        brand: 'Intel',
        model: 'Core i7',
        cpuSpeed: 3.6,
        cpuSocket: 'LGA 1200',
        wattage: 125,
        cacheSize: 16,
        processorCount: 8,
        showOnHomepage: false
      },
    },
    {
      name: 'Intel Core i7-12700K',
      type: 'cpu',
      price: 382.99,
      images: ['Intel Core i7-12700K%2F1.jpg'],
      details: {
        brand: 'Intel',
        model: 'Core i7',
        cpuSpeed: 5,
        cpuSocket: 'LGA 1700',
        wattage: 125,
        cacheSize: 16,
        processorCount: 12,
      },
    },
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
      },
    },
    /**
     * GPU Cards
     */
    {
      name: 'Gigabyte GeForce RTX 3070 Ti',
      type: 'gpu',
      price: 1180.99,
      images: [
        'Gigabyte GeForce RTX 3070 Ti%2F1.jpg',
        'Gigabyte GeForce RTX 3070 Ti%2F2.jpg',
        'Gigabyte GeForce RTX 3070 Ti%2F3.jpg',
      ],
      details: {
        brand: 'Gigabyte',
        ramType: 'GDDR6X',
        ramSize: 8,
        memoryClockSpeed: 19000,
        gpuClockSpeed: 1830,
        showOnHomepage: false
      },
    },
    {
      name: 'Gigabyte GeForce RTX 3080',
      type: 'gpu',
      price: 1300.0,
      images: [
        'Gigabyte GeForce RTX 3080%2F1.jpg',
        'Gigabyte GeForce RTX 3080%2F2.jpg',
        'Gigabyte GeForce RTX 3080%2F3.jpg',
      ],
      details: {
        brand: 'Gigabyte',
        ramType: 'GDDR6X',
        ramSize: 10,
        memoryClockSpeed: 19000,
        gpuClockSpeed: 1800,
        showOnHomepage: false
      },
    },
    {
      name: 'MSI RTX 2080 Ti',
      type: 'gpu',
      price: 1000.0,
      images: [
        'MSI RTX 2080 Ti%2F1.jpg',
        'MSI RTX 2080 Ti%2F2.jpg',
        'MSI RTX 2080 Ti%2F3.jpg',
      ],
      details: {
        brand: 'MSI',
        ramType: 'GDDR6X',
        ramSize: 11,
        memoryClockSpeed: 14000,
        gpuClockSpeed: 1000,
        showOnHomepage: false
      },
    },
    {
      name: 'MSI GeForce RTX 3070',
      type: 'gpu',
      price: 1180.99,
      images: [
        'MSI GeForce RTX 3070%2F1.jpg',
        'MSI GeForce RTX 3070%2F2.jpg',
        'MSI GeForce RTX 3070%2F3.jpg',
      ],
      details: {
        brand: 'MSI',
        ramType: 'GDDR6',
        ramSize: 8,
        memoryClockSpeed: 1845,
        gpuClockSpeed: 1845,
        showOnHomepage: false
      },
    },
    {
      name: 'ASUS Cerberus GeForce GTX 1050 Ti',
      type: 'gpu',
      price: 399.0,
      images: [
        'ASUS Cerberus GeForce GTX 1050 Ti%2F1.jpg',
        'ASUS Cerberus GeForce GTX 1050 Ti%2F2.jpg',
        'ASUS Cerberus GeForce GTX 1050 Ti%2F3.jpg',
      ],
      details: {
        brand: 'ASUS',
        ramType: 'GDDR5',
        ramSize: 4,
        memoryClockSpeed: 7008,
        gpuClockSpeed: 1341,
        showOnHomepage: false
      },
    },
    {
      name: 'MSI GeForce GTX 1060',
      type: 'cpu',
      price: 539.0,
      images: [
        'MSI GeForce GTX 1060%2F1.jpg',
        'MSI GeForce GTX 1060%2F2.jpg',
        'MSI GeForce GTX 1060%2F3.jpg',
      ],
      details: {
        brand: 'MSI',
        ramType: 'GDDR5',
        ramSize: 6,
        memoryClockSpeed: 8192,
        gpuClockSpeed: 1594,
        showOnHomepage: false
      },
    },
    {
      name: 'ZOTAC GeForce RTX 3060',
      type: 'cpu',
      price: 849.0,
      images: [
        'ZOTAC GeForce RTX 3060%2F1.jpg',
        'ZOTAC GeForce RTX 3060%2F2.jpg',
        'ZOTAC GeForce RTX 3060%2F3.jpg',
      ],
      details: {
        brand: 'ZOTAC',
        ramType: 'GDDR6',
        ramSize: 12,
        memoryClockSpeed: 15000,
        gpuClockSpeed: 1807,
        showOnHomepage: false
      },
    },
    /**
     * RAM CHIPS
     */
    {
      name: 'Corsair CMW16GX4M2C3200C16 Vengeance',
      type: 'ram',
      price: 67.61,
      images: [
        'Corsair CMW16GX4M2C3200C16 Vengeance%2F1.jpg',
        'Corsair CMW16GX4M2C3200C16 Vengeance%2F2.jpg',
        'Corsair CMW16GX4M2C3200C16 Vengeance%2F3.jpg',
      ],
      details: {
        brand: 'Corsair',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 3200,
        showOnHomepage: false
      },
    },
    {
      name: 'Hyperx FURY HX436C17FB3K2',
      type: 'ram',
      price: 590.0,
      images: [
        'Hyperx FURY HX436C17FB3K2%2F1.jpg',
        'Hyperx FURY HX436C17FB3K2%2F2.jpg',
        'Hyperx FURY HX436C17FB3K2%2F3.jpg',
      ],
      details: {
        brand: 'HyperX',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 3600,
        showOnHomepage: false
      },
    },
    {
      name: 'Kingston KVR24S17D8',
      type: 'ram',
      price: 529.0,
      images: [
        'Kingston KVR24S17D8%2F1.jpg',
        'Kingston KVR24S17D8%2F2.jpg',
        'Kingston KVR24S17D8%2F3.jpg',
      ],
      details: {
        brand: 'Kingston',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 2400,
        showOnHomepage: false
      },
    },
    {
      name: 'HyperX Fury HX426C16FB3AK2',
      type: 'ram',
      price: 115.91,
      images: [
        'HyperX Fury HX426C16FB3AK2%2F1.jpg',
        'HyperX Fury HX426C16FB3AK2%2F2.jpg',
        'HyperX Fury HX426C16FB3AK2%2F3.jpg',
      ],
      details: {
        brand: 'HyperX',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 2666,
        showOnHomepage: false
      },
    },
    {
      name: 'Crucial CT16G4SFD824A SODIMM',
      type: 'ram',
      price: 72.99,
      images: [
        'Crucial CT16G4SFD824A SODIMM%2F1.jpg',
        'Crucial CT16G4SFD824A SODIMM%2F2.jpg',
        'Crucial CT16G4SFD824A SODIMM%2F3.jpg',
      ],
      details: {
        brand: 'Crucial',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 2400,
        showOnHomepage: false
      },
    },
    {
      name: 'Patriot Viper 4 PV48G300C6K',
      type: 'ram',
      price: 39.99,
      images: [
        'Patriot Viper 4 PV48G300C6K%2F1.jpg',
        'Patriot Viper 4 PV48G300C6K%2F2.jpg',
        'Patriot Viper 4 PV48G300C6K%2F3.jpg',
      ],
      details: {
        brand: 'Patriot Memory',
        ramMemoryTechnology: 'DDR4',
        memorySize: 8,
        memorySpeed: 3000,
        showOnHomepage: false
      },
    },
    {
      name: 'Patriot Viper 4 PVS416G440C9K',
      type: 'ram',
      price: 121.0,
      images: [
        'Patriot Viper 4 PVS416G440C9K%2F1.jpg',
        'Patriot Viper 4 PVS416G440C9K%2F2.jpg',
        'Patriot Viper 4 PVS416G440C9K%2F3.jpg',
      ],
      details: {
        brand: 'Patriot Memory',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 4400,
        showOnHomepage: false
      },
    },
    {
      name: 'Corsair CMW32GX4M2E3200C16',
      type: 'ram',
      price: 157.0,
      images: [
        'Corsair CMW32GX4M2E3200C16%2F1.jpg',
        'Corsair CMW32GX4M2E3200C16%2F2.jpg',
        'Corsair CMW32GX4M2E3200C16%2F3.jpg',
      ],
      details: {
        brand: 'Corsair',
        ramMemoryTechnology: 'DDR4',
        memorySize: 32,
        memorySpeed: 3200,
        showOnHomepage: false
      },
    },
    {
      name: 'Crucial Ballistix BL2K8G32C16U4B',
      type: 'ram',
      price: 70.0,
      images: [
        'Crucial Ballistix BL2K8G32C16U4B%2F1.jpg',
        'Crucial Ballistix BL2K8G32C16U4B%2F2.jpg',
        'Crucial Ballistix BL2K8G32C16U4B%2F3.jpg',
      ],
      details: {
        brand: 'Crucial',
        ramMemoryTechnology: 'DDR4',
        memorySize: 16,
        memorySpeed: 3200,
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
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
        showOnHomepage: false
      },
    },
    {
      name: 'MSI MEG X570 UNIFY',
      type: 'motherboard',
      price: 119.99,
      images: [
        'MSI MEG X570 UNIFY%2F1.jpg',
        'MSI MEG X570 UNIFY%2F2.jpg',
        'MSI MEG X570 UNIFY%2F3.jpg',
      ],
      details: {
        brand: 'MSI',
        cpuSocket: 'Socket AM4',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'AMD X570',
        series: 'MEG X570 UNIFY',
        showOnHomepage: false
      },
    },
    {
      name: 'MSI AMD X570-A PRO D4 ATX Motherboard',
      type: 'motherboard',
      price: 158.0,
      images: [
        'MSI AMD X570-A PRO D4 ATX Motherboard%2F1.jpg',
        'MSI AMD X570-A PRO D4 ATX Motherboard%2F2.jpg',
        'MSI AMD X570-A PRO D4 ATX Motherboard%2F3.jpg',
      ],
      details: {
        brand: 'MSI',
        cpuSocket: 'Socket AM4',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'AMD X570',
        series: 'AMD X570-A PRO',
        showOnHomepage: false
      },
    },
    {
      name: 'MSI B550 7C91-002R',
      type: 'motherboard',
      price: 218.0,
      images: [
        'MSI B550 7C91-002R%2F1.jpg',
        'MSI B550 7C91-002R%2F2.jpg',
        'MSI B550 7C91-002R%2F3.jpg',
      ],
      details: {
        brand: 'MSI',
        cpuSocket: 'Socket AM4',
        ramMemoryTechnology: 'DDR4',
        chipsetType: 'AMD B550',
        series: 'B550 ',
        showOnHomepage: false
      },
    },
    /**
     * MONITORS
     */
    {
      name: 'HP 24mh FHD Monitor',
      type: 'monitor',
      price: 226.99,
      images: ['HP 24mh FHD Monitor%2F1.jpg', 
      'HP 24mh FHD Monitor%2F2.jpg'],
      details: {
        brand: 'HP',
        displayMaximumResolution: '1920 x 1080',
        resolutionStandard: 'FHD',
        displaySize: '23.8',
        refreshRate: '75 Hz',
        showOnHomepage: false
      },
    },
    {
      name: 'Sceptre Curved 27" 75Hz LED Monitor',
      type: 'monitor',
      price: 179.97,
      images: [
        'Sceptre Curved 27 75Hz LED Monitor%2F1.jpg',
        'Sceptre Curved 27 75Hz LED Monitor%2F2.jpg',
      ],
      details: {
        brand: 'Sceptre',
        displayMaximumResolution: '1920 x 1080',
        resolutionStandard: 'VGA',
        displaySize: '27',
        refreshRate: '75 Hz',
        showOnHomepage: false
      },
    },
    {
      name: 'SAMSUNG 23.5” CF396 Curved Computer Monitor',
      type: 'monitor',
      price: 169.99,
      images: [
        'SAMSUNG 23.5” CF396 Curved Computer Monitor%2F1.jpg',
        'SAMSUNG 23.5” CF396 Curved Computer Monitor%2F2.jpg',
        'SAMSUNG 23.5” CF396 Curved Computer Monitor%2F3.jpg',
      ],
      details: {
        brand: 'Samsung',
        displayMaximumResolution: '1920 x 1080',
        resolutionStandard: 'QHD',
        displaySize: '23.5',
        refreshRate: '60 Hz',
        showOnHomepage: false
      },
    },
    {
      name: 'Dell S3222HN 32-inch FHD 1920 x 1080 at 75Hz Curved Monitor',
      type: 'monitor',
      price: 348.99,
      images: [
        'Dell S3222HN 32-inch FHD 1920 x 1080 at 75Hz Curved Monitor%2F1.jpg',
        'Dell S3222HN 32-inch FHD 1920 x 1080 at 75Hz Curved Monitor%2F2.jpg',
        'Dell S3222HN 32-inch FHD 1920 x 1080 at 75Hz Curved Monitor%2F3.jpg',
      ],
      details: {
        brand: 'Dell',
        displayMaximumResolution: '1920 x 1080',
        resolutionStandard: 'FHD',
        displaySize: '32',
        refreshRate: '75 Hz',
        showOnHomepage: false
      },
    },
    {
      name: 'ASUS TUF Gaming 27" 2K HDR Gaming Monitor',
      type: 'monitor',
      price: 337.55,
      images: [
        'ASUS TUF Gaming 27 2K HDR Gaming Monitor%2F1.jpg',
        'ASUS TUF Gaming 27 2K HDR Gaming Monitor%2F2.jpg',
      ],
      details: {
        brand: 'Asus',
        displayMaximumResolution: '2560 x 1440',
        resolutionStandard: 'WQHD',
        displaySize: '27',
        refreshRate: '165 Hz',
        showOnHomepage: false
      },
    },
    {
      name: 'LG 32GN650-B Ultragear Gaming Monitor 32” QHD',
      type: 'monitor',
      price: 296.99,
      images: [
        'LG 32GN650-B Ultragear Gaming Monitor 32” QHD%2F1.jpg',
        'LG 32GN650-B Ultragear Gaming Monitor 32” QHD%2F2.jpg',
      ],
      details: {
        brand: 'LG',
        displayMaximumResolution: '2560 x 1440',
        resolutionStandard: 'QHD',
        displaySize: '32',
        refreshRate: '165 Hz',
        showOnHomepage: false
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
