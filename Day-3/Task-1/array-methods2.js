//task1: Use the following array to complete the below tasks.
// const products = [ { id: 1, name: "Laptop", price: 999.99, category: "Electronics" }, 
// { id: 2, name: "Headphones", price: 49.99, category: "Electronics" }, 
// { id: 3, name: "Smartphone", price: 699.99, category: "Electronics" }, 
// { id: 4, name: "Keyboard", price: 39.99, category: "Electronics" },
// { id: 5, name: "Mouse", price: 19.99, category: "Electronics" }, 
// { id: 6, name: "Shirt", price: 29.99, category: "Clothing" },
// { id: 7, name: "Jeans", price: 49.99, category: "Clothing" },
// { id: 8, name: "Sneakers", price: 79.99, category: "Footwear" },
// { id: 9, name: "Sandals", price: 39.99, category: "Footwear" },
// { id: 10, name: "Backpack", price: 59.99, category: "Accessories" } ];

// 1.Write a JavaScript program to create a new array that contains only the names of the products from the cart items array.

// 2.Write a JavaScript program to filter out and retrieve only the items from the cart whose price is greater than $50.

// 3.Write a JavaScript program to calculate the total price of all items in the cart by multiplying the price of each item by its quantity, and then summing up these values.

// 4.Write a JavaScript program to create an array of products that belong to the same category.



//Task-1.1:

const products = [ { id: 1, name: "Laptop", price: 999.99, category: "Electronics" }, { id: 2, name: "Headphones", price: 49.99, category: "Electronics" }, { id: 3, name: "Smartphone", price: 699.99, category: "Electronics" }, { id: 4, name: "Keyboard", price: 39.99, category: "Electronics" }, { id: 5, name: "Mouse", price: 19.99, category: "Electronics" }, { id: 6, name: "Shirt", price: 29.99, category: "Clothing" }, { id: 7, name: "Jeans", price: 49.99, category: "Clothing" }, { id: 8, name: "Sneakers", price: 79.99, category: "Footwear" }, { id: 9, name: "Sandals", price: 39.99, category: "Footwear" }, { id: 10, name: "Backpack", price: 59.99, category: "Accessories" } ];

const productNames = products.map(product => product.name);
console.log("Products in cartItems are : ",productNames);

//Task-1.2:

const expensiveItems = products.filter(product => product.price > 50).map(product=>product.name);
console.log("Expensive Products are :",expensiveItems);

//Task-1.3:

const totalPrice=products.reduce((total,product)=>total+product.price,0);
console.log(` Your Total amount is ${totalPrice} rupees`);


//Task-1.4:

const groupByCategory = {};
products.forEach(product => {
    if (!groupByCategory[product.category]) {
        groupByCategory[product.category] = [];
    }
    groupByCategory[product.category].push(product);
});
console.log(groupByCategory);

for (const category in groupByCategory) {
    console.log(`Category: ${category}, Number of Products: ${groupByCategory[category].length}`);

    groupByCategory[category].forEach(product => {
        console.log(product.name);
    });
    console.log();
}







