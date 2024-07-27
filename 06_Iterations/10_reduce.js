const myArr = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const intialValue = 0;
// const myTotal = myArr.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//     return accumulator + currentValue;
// }, intialValue);
// console.log(myTotal); // 10

// const myTotal = myArr.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal); // 10

const shoppingCart = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 999.99,
        stock: 50,
        rating: 4.5,
    },
    {
        name: "Smartphone",
        category: "Electronics",
        price: 699.99,
        stock: 120,
        rating: 4.7,
    },
    {
        name: "Coffee Maker",
        category: "Home Appliances",
        price: 89.99,
        stock: 30,
        rating: 4.2,
    },
    {
        name: "Headphones",
        category: "Electronics",
        price: 149.99,
        stock: 75,
        rating: 4.6,
    },
    {
        name: "Blender",
        category: "Home Appliances",
        price: 59.99,
        stock: 40,
        rating: 4.1,
    },
    {
        name: "Running Shoes",
        category: "Sportswear",
        price: 79.99,
        stock: 90,
        rating: 4.3,
    },
    {
        name: "Washing Machine",
        category: "Home Appliances",
        price: 499.99,
        stock: 20,
        rating: 4.4,
    },
    {
        name: "Electric Kettle",
        category: "Home Appliances",
        price: 29.99,
        stock: 100,
        rating: 4.0,
    },
    {
        name: "Tablet",
        category: "Electronics",
        price: 349.99,
        stock: 60,
        rating: 4.5,
    },
    {
        name: "Office Chair",
        category: "Furniture",
        price: 129.99,
        stock: 25,
        rating: 4.3,
    },
];

const priceToPay = shoppingCart.reduce(
    (acc, product) => acc + product.price,
    0
);
console.log(priceToPay.toFixed(2));
