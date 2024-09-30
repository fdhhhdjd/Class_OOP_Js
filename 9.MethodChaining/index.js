class User {
  constructor(name) {
    this.name = name;
    this.loggedIn = false;
  }

  login() {
    this.loggedIn = true;
    console.log(`${this.name} is now logged in.`);
    return this; // Return this for chaining
  }

  updateProfile(email) {
    this.email = email;
    console.log(`Profile updated for ${this.name} with email: ${email}`);
    return this; // Return this for chaining
  }

  logout() {
    this.loggedIn = false;
    console.log(`${this.name} has logged out.`);
    return this; // Return this for chaining
  }
}

// Usage
const user = new User("John");
user.login().updateProfile("john@example.com").logout(); // Method chaining
