//* Define simple behaviors as separate objects
const hasAddress = {
  setAddress(address) {
    this.address = address;
  },
  getAddress() {
    return this.address;
  },
};

const hasContactInfo = {
  setPhone(phone) {
    this.phone = phone;
  },
  getPhone() {
    return this.phone;
  },
};

//* Compose a Customer using composition
class Customer {
  constructor(name) {
    this.name = name;
  }
}

//* Assign behaviors to the Customer using Object.assign
Object.assign(Customer.prototype, hasAddress, hasContactInfo);

//*/ Usage
const customer = new Customer("Bob");
customer.setAddress("123 Elm St");
customer.setPhone("555-555-5555");

console.log(
  `${
    customer.name
  } lives at ${customer.getAddress()} and can be contacted at ${customer.getPhone()}`
);
