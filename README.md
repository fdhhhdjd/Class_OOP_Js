<p align="center"><a href="https://profile-forme.com/" target="_blank"><img src="https://res.cloudinary.com/ecommerce2021/image/upload/v1659065987/avatar/logo_begsn1.png" width="300"></a></p>

<p align="center">
<a href="https://www.linkedin.com/in/tai-nguyen-tien-787545213/"><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="Linkedin"></a>
<a href="https://profile-forme.surge.sh"><img src="https://img.icons8.com/color/48/000000/internet--v1.png" alt="Profile"></a>
<a href="tel:0798805741"><img src="https://img.icons8.com/color/48/000000/apple-phone.png" alt="Phone"></a>
<a href="mailto:nguyentientai10@gmail.com"><img src="https://img.icons8.com/fluency/48/000000/send-mass-email.png" alt="Email"></a>
</p>

# Introduction to OOP (Object-Oriented Programming)

---

## Vietnamese 🇻🇳

### 1. OOP là gì?

Lập trình hướng đối tượng (OOP) là cách tổ chức mã nguồn thành các **đối tượng** đại diện cho các thực thể trong thực tế. Các đối tượng này có **thuộc tính** (attributes) và **hành vi** (methods) để mô tả chúng là gì và chúng có thể làm gì.

### 2. Ví dụ thực tế với Khách hàng

Giả sử bạn đang xây dựng một hệ thống quản lý khách hàng:

- **Khách hàng** là một đối tượng.
- **Thuộc tính của Khách hàng** có thể bao gồm: tên, địa chỉ, số điện thoại.
- **Hành vi của Khách hàng** có thể là: đặt hàng, hủy đơn hàng.

### 3. Các khái niệm cơ bản trong OOP

- **Đối tượng**: Đại diện cho một thực thể mà bạn muốn mô phỏng, ví dụ: khách hàng, sản phẩm, đơn hàng.
- **Lớp (Class)**: Là mẫu để tạo ra các đối tượng, ví dụ: `Customer class` để tạo các khách hàng khác nhau.
- **Kế thừa**: Cho phép một lớp mới thừa hưởng các thuộc tính và hành vi từ một lớp khác.
- **Đa hình**: Cho phép đối tượng thay đổi hành vi, ví dụ: khách hàng có thể đặt nhiều loại đơn hàng khác nhau.
- **Đóng gói**: Giấu chi tiết bên trong của một đối tượng và chỉ cho phép bên ngoài tương tác thông qua các phương thức công khai.
- **Trừu tượng hóa**: Giấu đi sự phức tạp và chỉ hiển thị các phần cần thiết của đối tượng hoặc hàm.
- **Phương thức và thuộc tính tĩnh**: Liên kết với lớp thay vì đối tượng cụ thể. Phương thức tĩnh hữu ích cho các hàm tiện ích hoặc hằng số.
- **Getters và Setters**: Cho phép kiểm soát việc truy cập và sửa đổi các thuộc tính của đối tượng.
- **Từ ES2022**, JavaScript hỗ trợ phương thức và thuộc tính thực sự riêng tư với ký hiệu #. Những thuộc tính và phương thức này không thể truy cập từ bên ngoài lớp.
- **Method chaining**: Cho phép gọi nhiều phương thức trên cùng một đối tượng trong một dòng, giúp mã ngắn gọn hơn. Được thực hiện bằng cách trả về đối tượng hiện tại từ các phương thức.
- **Composition**: Là sự kết hợp các đối tượng nhỏ hơn, thay vì sử dụng kế thừa, tập trung vào mối quan hệ "has-a" thay vì "is-a". Linh hoạt hơn kế thừa và tránh việc gắn kết chặt chẽ giữa các lớp.

---

## English 🇬🇧

### 1. What is OOP?

Object-Oriented Programming (OOP) is a way of organizing code into **objects** that represent things in real life. These objects have **properties** (attributes) and **behaviors** (methods) to define what they are and what they can do.

### 2. Real-world Example with Customer

Imagine you're building a customer management system:

- **Customer** is an object.
- A **Customer's properties** could include: name, address, phone number.
- A **Customer's behaviors** could be: placing an order, canceling an order.

### 3. Basic OOP Concepts

- **Object**: Represents something you're trying to model, e.g., a customer, a product, an order.
- **Class**: A template for creating objects, e.g., a `Customer` class to create different customers.
- **Inheritance**: Allows a new class to inherit properties and behaviors from another class.
- **Polymorphism**: Enables objects to change behavior, e.g., a customer can place different types of orders.
- **Encapsulation**: Hides internal details of an object and exposes only the necessary methods for outside interaction.
- **Abstraction**: Hides complex implementation details and only shows the necessary parts of an object or function.
- **Static methods and properties**: Belong to the class rather than any instance of the class and are useful for utility functions or constants.
- **Getters and Setters**: Control access to object properties, providing a more advanced form of encapsulation.
- **Starting from ES2022**, JavaScript supports private methods and fields using the `#` symbol, preventing external access to them.
- **Method chaining**: Allows calling multiple methods on the same object in a single line, improving code conciseness.
- **Composition**: Is an alternative to inheritance, where objects are composed of smaller objects (has-a relationship). It’s more flexible than inheritance and avoids tightly coupling classes.

<p align="center">
  <a href="https://profile-forme.com/" target="_blank"><img src="https://res.cloudinary.com/ecommerce2021/image/upload/v1659065987/avatar/logo_begsn1.png" width="100"></a>
  <br/>
  Created by <strong>Tai Nguyen Tien</strong>
</p>
