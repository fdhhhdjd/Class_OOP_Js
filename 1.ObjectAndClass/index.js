//* Define the customer class (a template for creating customer object )
class Customer {
  //* Constructor to initialize a customer object with name, address, and phone
  constructor(name, address, phone) {
    this.name = name; //* Property: customer's name
    this.address = address; //* Property: customer's address
    this.phone = phone; //* Property: customer's phone
  }

  //* Method (Behavior): Place an order
  placeOrder(order) {
    console.log(`${this.name} has placed an order for ${order}`);
  }

  //* Method (Behavior): Cancel an order
  cancelOrder(order) {
    console.log(`${this.name} has canceled the order for ${order}`);
  }
}

//* Created instances of the customer class
const customer1 = new Customer(
  "Tai Heo Dev",
  "Khanh Hoa, Viet Nam",
  "123-456-7890"
);

//* Use the object's method
customer1.placeOrder("Laptop");

//* await 3s cancel the order
setTimeout(() => {
  customer1.cancelOrder("Laptop");
}, 3000);
