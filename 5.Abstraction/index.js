class Payment {
  // The constructor initializes necessary data
  constructor(amount) {
    this.amount = amount;
  }

  // Public method that provides a simplified way to make a payment
  makePayment() {
    if (this.validate()) {
      console.log(`Payment of $${this.amount} processed successfully.`);
    } else {
      console.log("Payment validation failed.");
    }
  }

  // Private method to validate the payment (internal detail)
  validate() {
    // Complex validation logic (hidden)
    return this.amount > 0; // Payment is valid if the amount is positive
  }
}

// Usage
const payment = new Payment(100);
payment.makePayment(); // Hides validation details, shows a simple interface
