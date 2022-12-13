export const categoriesData = [
  {
    id: 1,
    name: 'Food',
    icon: require('../assets/icons/cutlery.png'),
    tintColor: '#35BDD0',
  },
  {
    id: 2,
    name: 'Fuel',
    icon: require('../assets/icons/fuel.png'),
    tintColor: '#8D3DAF',
  },
  {
    id: 3,
    name: 'Groceries',
    icon: require('../assets/icons/store.png'),
    tintColor: '#E03B8B',
  },
  {
    id: 4,
    name: 'Shooping',
    icon: require('../assets/icons/shopping.png'),
    tintColor: '#E07C24',
  },
  {
    id: 5,
    name: 'Online',
    icon: require('../assets/icons/bank.png'),
    tintColor: '#3DBE29',
  },
  {
    id: 6,
    name: 'Banking',
    icon: require('../assets/icons/bank.png'),
    tintColor: '#3DBE29',
  },
];

export const transactionsData = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export const transactionsList = new Array(5).fill(0).map((_, index1) => ({
  title: `Title ${index1}`,
  data: new Array(10).fill(0).map((_, index) => ({
    id: index,
    categoryId: Math.floor(Math.random() * 6) + 1,
    amount: Math.floor(Math.random() * 200) + 1,
  })),
}));
