class SecureCustomer {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    let _phone = phone; //* Private variable (not accessible directly outside)

    //* Getter for phone number
    this.getPhone = () => _phone;

    //* Setter for phone number
    this.setPhone = (newPhone) => {
      _phone = newPhone;
    };
  }

  //* Method to display customer details
  displayDetails() {
    console.log(`Customer: ${this.name}, Phone: ${this.getPhone()}`);
  }
}

//* Create an instance of SecureCustomer
const secureCustomer = new SecureCustomer(
  "Songoku",
  "987 Pine St",
  "555-321-7654"
);

//* Use methods to interact with the private phone number
secureCustomer.displayDetails(); //* Displays the phone number
secureCustomer.setPhone("555-654-3210"); //* Updates the phone number
secureCustomer.displayDetails(); //* Displays the updated phone number
