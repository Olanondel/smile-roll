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
        features: [],
        ingredients: [
          { id: 'tuna' },
          { id: 'rice' },
          { id: 'nori' },
          { id: 'japaneseMayonnaise' },
          { id: 'sesameOil' },
        ],
      },
      {
        id: 2,
        image: '/images/product-1.png',
        title: 'Гункан с лососем',
        weight: '40 г',
        description: 'Нори, рис, лосось, японский майонез, кунжутное масло',
        price: 180,
        features: [],
        ingredients: [
          { id: 'salmon' },
          { id: 'rice' },
          { id: 'nori' },
          { id: 'japaneseMayonnaise' },
          { id: 'sesameOil' },
        ],
      },
      {
        id: 3,
        image: '/images/product-2.png',
        title: 'Гункан с креветкой',
        weight: '40 г',
        description: 'Нори, рис, креветка, японский майонез, соус спайси',
        price: 185,
        features: [{ id: 'spicy' }],
        ingredients: [
          { id: 'shrimp' },
          { id: 'rice' },
          { id: 'nori' },
          { id: 'japaneseMayonnaise' },
          { id: 'spicySauce' },
        ],
      },
      {
        id: 4,
        image: '/images/product.png',
        title: 'Гункан с угрем',
        weight: '40 г',
        description: 'Нори, рис, угорь, соус унаги, кунжут',
        price: 210,
        features: [{ id: 'lactoseFree' }],
        ingredients: [
          { id: 'eel' },
          { id: 'rice' },
          { id: 'nori' },
          { id: 'unagiSauce' },
          { id: 'sesame' },
        ],
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
        features: [],
        ingredients: [
          { id: 'salmon' },
          { id: 'creamCheese' },
          { id: 'cucumber' },
          { id: 'rice' },
          { id: 'nori' },
        ],
      },
      {
        id: 6,
        image: '/images/product.png',
        title: 'Калифорния',
        weight: '230 г',
        description: 'Рис, нори, крабовый микс, авокадо, огурец, тобико',
        price: 290,
        features: [{ id: 'lactoseFree' }],
        ingredients: [
          { id: 'crabMix' },
          { id: 'avocado' },
          { id: 'cucumber' },
          { id: 'tobiko' },
          { id: 'rice' },
          { id: 'nori' },
        ],
      },
      {
        id: 7,
        image: '/images/product-1.png',
        title: 'Спайси тунец',
        weight: '240 г',
        description: 'Рис, нори, тунец, соус спайси, огурец',
        price: 305,
        features: [{ id: 'spicy' }, { id: 'lactoseFree' }],
        ingredients: [
          { id: 'tuna' },
          { id: 'spicySauce' },
          { id: 'cucumber' },
          { id: 'rice' },
          { id: 'nori' },
        ],
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
        features: [],
        ingredients: [
          { id: 'salmon' },
          { id: 'eel' },
          { id: 'creamCheese' },
          { id: 'rice' },
          { id: 'nori' },
        ],
      },
      {
        id: 9,
        image: '/images/product-2.png',
        title: 'Сет Премиум',
        weight: '1100 г',
        description: 'Филадельфия, ролл с тунцом, ролл с угрем, гунканы, соусы',
        price: 1190,
        features: [],
        ingredients: [
          { id: 'salmon' },
          { id: 'tuna' },
          { id: 'eel' },
          { id: 'creamCheese' },
          { id: 'rice' },
          { id: 'nori' },
        ],
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
        features: [{ id: 'vegan' }, { id: 'lactoseFree' }],
        ingredients: [{ id: 'water' }, { id: 'sugar' }],
      },
      {
        id: 11,
        image: '/images/fanta.png',
        title: 'Сок апельсиновый',
        weight: '1 л',
        description: 'Негазированный сок',
        price: 120,
        features: [{ id: 'vegan' }, { id: 'lactoseFree' }],
        ingredients: [{ id: 'orangeJuice' }],
      },
    ],
  },
]

export const allProducts = menuCategories.flatMap((c) => c.products)

export function flattenMenuCategories(menuCategories) {
  if (!Array.isArray(menuCategories)) return []

  return menuCategories.flatMap((menuCategory) => {
    const products = Array.isArray(menuCategory.products) ? menuCategory.products : []

    return products.map((product) => ({
      ...product,

      // оставляем category у товара, чтобы потом фильтровать по ней
      category: product.category || menuCategory.category,

      // можно сохранить и дополнительную инфу о секции
      categoryId: menuCategory.id,
      categoryTitle: menuCategory.title,
    }))
  })
}

export function filterProducts(products, filters) {
  if (!Array.isArray(products)) return []

  const { category = '', features = [], ingredients = [] } = filters || {}

  return products.filter((product) => {
    // 1. Фильтр по категории
    const matchesCategory = !category || category === 'all' || product.category === category

    // 2. Фильтр по фичам
    // every = товар должен содержать ВСЕ выбранные фичи
    const matchesFeatures =
      !features.length ||
      features.every((featureId) => product.features?.some((feature) => feature.id === featureId))

    // 3. Фильтр по ингредиентам
    // every = товар должен содержать ВСЕ выбранные ингредиенты
    const matchesIngredients =
      !ingredients.length ||
      ingredients.every((ingredientId) =>
        product.ingredients?.some((ingredient) => ingredient.id === ingredientId),
      )

    return matchesCategory && matchesFeatures && matchesIngredients
  })
}

const CATEGORY_OPTIONS = {
  all: { id: 1, value: 'all', label: 'Все' },
  classic: { id: 2, value: 'classic', label: 'Классические' },
  maki: { id: 3, value: 'maki', label: 'Маки' },
  dragon: { id: 4, value: 'dragon', label: 'Драконы' },
  baked: { id: 5, value: 'baked', label: 'Запеченные' },
  philadelphia: { id: 6, value: 'philadelphia', label: 'Феликсы' },
  sweet: { id: 7, value: 'sweet', label: 'Сладкие' },
}

export const FEATURE_OPTIONS = {
  spicy: {
    value: 'spicy',
    id: 'spicy',
    label: 'Острое',
    icon: 'SpicyIcon',
  },
  lactoseFree: {
    value: 'lactoseFree',
    id: 'lactoseFree',
    label: 'Без лактозы',
    icon: 'LactoseFreeIcon',
  },
  vegetarian: {
    value: 'vegetarian',
    id: 'vegetarian',
    label: 'Вегетарианское',
    icon: 'LeafIcon',
  },
}

export const INGREDIENT_OPTIONS = {
  salmon: {
    id: 'salmon',
    value: 'salmon',
    label: 'Лосось',
    category: 'fish',
  },
  tuna: {
    id: 'tuna',
    value: 'tuna',
    label: 'Тунец',
    category: 'fish',
  },
  eel: {
    id: 'eel',
    value: 'eel',
    label: 'Угорь',
    category: 'fish',
  },
  shrimp: {
    id: 'shrimp',
    value: 'shrimp',
    label: 'Креветка',
    category: 'seafood',
  },
  chickenFillet: {
    id: 'chickenFillet',
    value: 'chickenFillet',
    label: 'Куриное филе',
    category: 'meat',
  },
  tofu: {
    id: 'tofu',
    value: 'tofu',
    label: 'Тофу',
    category: 'vegan',
  },
  creamCheese: {
    id: 'creamCheese',
    value: 'creamCheese',
    label: 'Сливочный сыр',
    category: 'dairy',
  },
  avocado: {
    id: 'avocado',
    value: 'avocado',
    label: 'Авокадо',
    category: 'vegetable',
  },
  cucumber: {
    id: 'cucumber',
    value: 'cucumber',
    label: 'Огурец',
    category: 'vegetable',
  },
  tomato: {
    id: 'tomato',
    value: 'tomato',
    label: 'Помидор',
    category: 'vegetable',
  },
  shiitake: {
    id: 'shiitake',
    value: 'shiitake',
    label: 'Шиитаке',
    category: 'vegetable',
  },
  rice: {
    id: 'rice',
    value: 'rice',
    label: 'Рис',
    category: 'base',
  },
  nori: {
    id: 'nori',
    value: 'nori',
    label: 'Нори',
    category: 'base',
  },
  crabMix: {
    id: 'crabMix',
    value: 'crabMix',
    label: 'Крабовый микс',
    category: 'seafood',
  },
  tobiko: {
    id: 'tobiko',
    value: 'tobiko',
    label: 'Тобико',
    category: 'seafood',
  },
  spicySauce: {
    id: 'spicySauce',
    value: 'spicySauce',
    label: 'Соус спайси',
    category: 'sauce',
  },
  unagiSauce: {
    id: 'unagiSauce',
    value: 'unagiSauce',
    label: 'Соус унаги',
    category: 'sauce',
  },
  teriyakiSauce: {
    id: 'teriyakiSauce',
    value: 'teriyakiSauce',
    label: 'Соус терияки',
    category: 'sauce',
  },
  japaneseMayonnaise: {
    id: 'japaneseMayonnaise',
    value: 'japaneseMayonnaise',
    label: 'Японский майонез',
    category: 'sauce',
  },
  sesame: {
    id: 'sesame',
    value: 'sesame',
    label: 'Кунжут',
    category: 'extra',
  },
  sesameOil: {
    id: 'sesameOil',
    value: 'sesameOil',
    label: 'Кунжутное масло',
    category: 'extra',
  },
}

export const getCategoryOptions = () => Object.values(CATEGORY_OPTIONS)
export const getFeatureOptions = () => Object.values(FEATURE_OPTIONS)
export const getIngredientOptions = () => Object.values(INGREDIENT_OPTIONS)
