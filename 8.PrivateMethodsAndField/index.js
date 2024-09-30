class BankAccount {
  #balance = 0; //* Private field

  constructor(owner) {
    this.owner = owner;
  }

  //*/ Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#showBalance();
    } else {
      console.log("Invalid deposit amount!");
    }
  }

  //*/ Private method
  #showBalance() {
    console.log(`Balance for ${this.owner}: $${this.#balance}`);
  }
}

//* Usage
const account = new BankAccount("Alice");
account.deposit(100); //* Works, and private method is called inside the class
// account.#balance; // Error: Private field '#balance' must not be accessed outside the class
