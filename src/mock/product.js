export const menuCategories = [
  {
    id: 'gunkans',
    title: 'Гунканы',
    category: 'gunkans',
    products: [
      {
        id: 1,
        image: '/images/product.png',
        title: 'Гункан с тунцом и трюфелем',
        weight: '40 г',
        description: 'Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло',
        price: 190,
      },
      {
        id: 2,
        image: '/images/product-1.png',
        title: 'Гункан с лососем',
        weight: '40 г',
        description: 'Нори, рис, лосось, японский майонез, кунжутное масло',
        price: 180,
      },
      {
        id: 3,
        image: '/images/product-2.png',
        title: 'Гункан с креветкой',
        weight: '40 г',
        description: 'Нори, рис, креветка, японский майонез, соус спайси',
        price: 185,
      },
      {
        id: 4,
        image: '/images/product.png',
        title: 'Гункан с угрем',
        weight: '40 г',
        description: 'Нори, рис, угорь, соус унаги, кунжут',
        price: 210,
      },
    ],
  },
  {
    id: 'rolls',
    title: 'Роллы',
    category: 'rolls',
    products: [
      {
        id: 5,
        image: '/images/product-2.png',
        title: 'Филадельфия',
        weight: '250 г',
        description: 'Рис, нори, лосось, сливочный сыр, огурец',
        price: 320,
      },
      {
        id: 6,
        image: '/images/product.png',
        title: 'Калифорния',
        weight: '230 г',
        description: 'Рис, нори, крабовый микс, авокадо, огурец, тобико',
        price: 290,
      },
      {
        id: 7,
        image: '/images/product-1.png',
        title: 'Спайси тунец',
        weight: '240 г',
        description: 'Рис, нори, тунец, соус спайси, огурец',
        price: 305,
      },
    ],
  },
  {
    id: 'sets',
    title: 'Сеты',
    category: 'sets',
    products: [
      {
        id: 8,
        image: '/images/product.png',
        title: 'Сет Классический',
        weight: '850 г',
        description: 'Филадельфия, Калифорния, ролл с угрем, гункан с лососем',
        price: 890,
      },
      {
        id: 9,
        image: '/images/product-2.png',
        title: 'Сет Премиум',
        weight: '1100 г',
        description: 'Филадельфия, ролл с тунцом, ролл с угрем, гунканы, соусы',
        price: 1190,
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Напитки',
    category: 'drinks',
    products: [
      {
        id: 10,
        image: '/images/cola.png',
        title: 'Coca-Cola',
        weight: '500 мл',
        description: 'Газированный безалкогольный напиток',
        price: 80,
      },
      {
        id: 11,
        image: '/images/fanta.png',
        title: 'Сок апельсиновый',
        weight: '1 л',
        description: 'Негазированный сок',
        price: 120,
      },
    ],
  },
]

export const allProducts = menuCategories.flatMap((c) => c.products)

export const FEATURE_OPTIONS = {
  spicy: {
    id: 'spicy',
    label: 'Острое',
    icon: 'SpicyIcon',
  },
  lactoseFree: {
    id: 'lactoseFree',
    label: 'Без лактозы',
    icon: 'LactoseFreeIcon',
  },
  vegetarian: {
    id: 'vegetarian',
    label: 'Вегетарианское',
    icon: 'LeafIcon',
  },
}

export const INGREDIENT_OPTIONS = {
  salmon: {
    id: 'salmon',
    label: 'Лосось',
    category: 'fish',
  },
  tuna: {
    id: 'tuna',
    label: 'Тунец',
    category: 'fish',
  },
  eel: {
    id: 'eel',
    label: 'Угорь',
    category: 'fish',
  },
  shrimp: {
    id: 'shrimp',
    label: 'Креветка',
    category: 'seafood',
  },
  chickenFillet: {
    id: 'chickenFillet',
    label: 'Куриное филе',
    category: 'meat',
  },
  tofu: {
    id: 'tofu',
    label: 'Тофу',
    category: 'vegan',
  },
  creamCheese: {
    id: 'creamCheese',
    label: 'Сливочный сыр',
    category: 'dairy',
  },
  avocado: {
    id: 'avocado',
    label: 'Авокадо',
    category: 'vegetable',
  },
  cucumber: {
    id: 'cucumber',
    label: 'Огурец',
    category: 'vegetable',
  },
  tomato: {
    id: 'tomato',
    label: 'Помидор',
    category: 'vegetable',
  },
  shiitake: {
    id: 'shiitake',
    label: 'Шиитаке',
    category: 'vegetable',
  },
  rice: {
    id: 'rice',
    label: 'Рис',
    category: 'base',
  },
  nori: {
    id: 'nori',
    label: 'Нори',
    category: 'base',
  },
  crabMix: {
    id: 'crabMix',
    label: 'Крабовый микс',
    category: 'seafood',
  },
  tobiko: {
    id: 'tobiko',
    label: 'Тобико',
    category: 'seafood',
  },
  spicySauce: {
    id: 'spicySauce',
    label: 'Соус спайси',
    category: 'sauce',
  },
  unagiSauce: {
    id: 'unagiSauce',
    label: 'Соус унаги',
    category: 'sauce',
  },
  teriyakiSauce: {
    id: 'teriyakiSauce',
    label: 'Соус терияки',
    category: 'sauce',
  },
  japaneseMayonnaise: {
    id: 'japaneseMayonnaise',
    label: 'Японский майонез',
    category: 'sauce',
  },
  sesame: {
    id: 'sesame',
    label: 'Кунжут',
    category: 'extra',
  },
  sesameOil: {
    id: 'sesameOil',
    label: 'Кунжутное масло',
    category: 'extra',
  },
}
