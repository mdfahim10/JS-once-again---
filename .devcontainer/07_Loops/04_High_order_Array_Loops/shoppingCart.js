const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "React Course",
        price: 3999
    },
    {
        itemName: "Node.js Course",
        price: 3499
    },
    {
        itemName: "MongoDB Course",
        price: 2499
    }
];

const totalAmount = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(`Total Amount to Pay: ₹${totalAmount}`);