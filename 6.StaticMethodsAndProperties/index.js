class MathUtils {
  //* Static property
  static PI = 3.14159;

  //* Static method
  static calculateCircumference(radius) {
    return 2 * MathUtils.PI * radius;
  }
}

//* Using static methods and properties without creating an instance
console.log(`PI: ${MathUtils.PI}`);
console.log(
  `Circumference of circle with radius 5: ${MathUtils.calculateCircumference(
    5
  )}`
);
