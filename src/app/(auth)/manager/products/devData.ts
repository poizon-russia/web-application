type Products = {
  id: string;
  name: string;
  description: string;
  category: {
    id: string;
    name: string;
  } | null;
  icon: string | null;
  size: string;
  weight: number;
  price: number;
};

export const ProductsResponse: Products[] = [
  {
    id: '1',
    name: 'Nike Air Max 90',
    description:
      'Classic Nike Air Max 90 sneakers with comfortable cushioning.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '10 5 3',
    weight: 800,
    price: 12000,
  },
  {
    id: '2',
    name: 'Nike Air Force 1',
    description: 'Iconic Nike Air Force 1 with a durable design.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '11 6 4',
    weight: 900,
    price: 10000,
  },
  {
    id: '3',
    name: 'Nike Dunk Low',
    description: 'Stylish Nike Dunk Low sneakers for casual wear.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '10 5 3',
    weight: 850,
    price: 9500,
  },
  {
    id: '4',
    name: 'Nike Blazer Mid',
    description: 'Retro Nike Blazer Mid sneakers with a modern twist.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '12 6 4',
    weight: 700,
    price: 11000,
  },
  {
    id: '5',
    name: 'Nike Air Max 270',
    description: 'Nike Air Max 270 with a large Air unit for maximum comfort.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '11 5 3',
    weight: 780,
    price: 13000,
  },
  {
    id: '6',
    name: 'Nike React Element 55',
    description: 'Nike React Element 55 with a responsive cushioning.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '10 5 3',
    weight: 750,
    price: 11500,
  },
  {
    id: '7',
    name: 'Nike ZoomX Vaporfly Next',
    description:
      'High-performance Nike ZoomX Vaporfly Next% for marathon runners.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '10 5 3',
    weight: 600,
    price: 25000,
  },
  {
    id: '8',
    name: 'Nike SB Dunk High',
    description: 'Durable Nike SB Dunk High for skateboarding.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '11 6 4',
    weight: 900,
    price: 10500,
  },
  {
    id: '9',
    name: 'Nike Air Jordan 1',
    description: 'Legendary Nike Air Jordan 1 with a premium leather upper.',
    category: {
      id: '1',
      name: 'Sneakers',
    },
    icon: null,
    size: '12 7 5',
    weight: 950,
    price: 15000,
  },
];
