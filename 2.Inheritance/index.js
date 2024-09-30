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

//* Create an instance of PremiumCustomer
const premiumCustomer = new PremiumCustomer(
  "Tai Dep Trai",
  "456 Oak St",
  "555-123-4567",
  20
);

//* Use the methods
premiumCustomer.placeOrder("Smartphone");
premiumCustomer.cancelOrder("Smartphone"); //* This method is inherited from the parent class
