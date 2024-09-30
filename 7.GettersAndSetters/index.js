class Product {
  #price; //* Private field

  constructor(name, price) {
    this.name = name;
    this.#price = price; //* Initialize private field
  }

  //* Getter for price
  get price() {
    return `$${this.#price}`;
  }

  //* Setter for price
  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log("Invalid price!");
    }
  }
}

//* Usage
const product = new Product("Laptop", 1000);
console.log(product.price); //* Uses getter to display the price

product.price = 1200;
console.log(product.price); //* New price
