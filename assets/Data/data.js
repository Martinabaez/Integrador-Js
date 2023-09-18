const productsData = [
  {
    id: 1,
    name: "Clases privadas de 2 horas",
    bid: 70000,
    fact: "valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow1.png",
  },
  {
    id: 2,
    name: "Clases privadas de 3 horas",
    bid: 95000,
    fact: "Valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow2.png",
  },
  {
    id: 3,
    name: "Día completo",
    bid:17000,
    fact: "Valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow3.png",
  },
  {
    id: 4,
    name: "Clases grupales 2hs(1 día)",
    bid: 23000,
    fact: "Valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow4.png",
  },
  {
    id: 5,
    name: "Clases grupales 4hs (2 días)",
    bid: 45000,
    fact: "Valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow5.png",
  },
  {
    id: 6,
    name: "Clases grupales 6hs (3 días)",
    bid: 62000,
    fact: "Valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow6.png",
  },
  {
    id: 7,
    name: "Clases grupales 8hs (4 días)",
    bid: 78000,
    fact: "Valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow7.png",
  },
  {
    id: 8,
    name: "Clases grupales 12hs (6 días)",
    bid: 114000,
    fact: "Valor:",
    category: "Snowboard",
    cardImg: "./assets/img/data-img/snow8.png",
  },
  {
    id: 9,
    name: "Clases privadas 2hs",
    bid: 70000,
    fact: "Valor:",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite1.png",
  },
  {
    id: 10,
    name: "Clases privadas 3hs",
    bid: 95000,
    fact: "Valor:",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite2.png",
  },
  {
    id: 11,
    name: "Clases privadas-Día completo ",
    bid: 17000,
    fact: "Valor:",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite3.png",
  },
  {
    id: 12,
    name: "Clases grupales 2 personas-2hs",
    bid: 75000,
    fact: "Valor:",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite4.png",
  },
  {
    id: 13,
    name: "Clases grupales 2 personas-3hs",
    bid: 102000,
    fact: "Valor:",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite5.png",
  },
  {
    id: 14,
    name: "Clases grupales 2 personas-Día completo",
    bid: 5.55,
    fact: "PasquSaw",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite6.png",
  },
  {
    id: 15,
    name: "Clases grupales 3 personas-2hs",
    bid: 80000,
    fact: "Valor:",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite7.png",
  },
  {
    id: 15,
    name: "Clases grupales 3 personas-3hs",
    bid: 105000,
    fact: "Valor:",
    category: "Kitesurf",
    cardImg: "./assets/img/data-img/kite8.png",
  },
];



//////////////////////////////  6
const divideProductsInParts = (size) => {
  // retornar la lista de productos
  let productsList = []
  // 0 - 6 - 12
  for (let i = 0; i < productsData.length; i+= size) {
    // [ [{},{},{},{},{},{}] , [{},{},{},{},{},{}], [{},{},{}]]
    productsList.push(productsData.slice(i,i + size))

  }
  return productsList;
}

// const [products, setState] = useState
// const [currentProductsIndex, setState] = useState
// const [productsLimit, setState] = useState
// const [activeFilter, setState] = useState

const appState = {                             //  0                     1              2
  products: divideProductsInParts(6), // [ [{},{},{},{},{}] , [{},{},{},{},{}], [{},{},{},{},{}]] 3
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(6).length, // 3
  activeFilter: null
}