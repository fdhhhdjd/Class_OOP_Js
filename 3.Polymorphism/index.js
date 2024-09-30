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

//* Define a new class that inherits from Customer
class PremiumCustomer extends Customer {
  constructor(name, address, phone, discount) {
    super(name, address, phone); //* Call the parent class constructor
    this.discount = discount; //* New property specific to premium customers
  }

  placeOrder(order) {
    console.log(
      `${this.name} (Premium) has placed an order for: ${order} with a ${this.discount}% discount!`
    );
  }
}

//* Regular Customer
const regularCustomer = new Customer("Tom", "789 Maple St", "555-987-6543");
const premiumCustomer = new PremiumCustomer(
  "Tai Dep Trai",
  "456 Oak St",
  "555-123-4567",
  20
);

//* Customer Normal
regularCustomer.placeOrder("TV"); //* No discount, regular order

//* Premium Customer
premiumCustomer.placeOrder("TV"); //* With discount, premium order
