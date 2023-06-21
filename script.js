class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  getPerimeter() {
    return 4 * this._width;
  }
}

// Example usage
const rectangle = new Rectangle(4, 5);
console.log('Rectangle Area:', rectangle.getArea()); // Output: Rectangle Area: 20
console.log('Rectangle Width:', rectangle.width); // Output: Rectangle Width: 4
console.log('Rectangle Height:', rectangle.height); // Output: Rectangle Height: 5

const square = new Square(4);
console.log('Square Area:', square.getArea()); // Output: Square Area: 16
console.log('Square Perimeter:', square.getPerimeter()); // Output: Square Perimeter: 16
console.log('Square Width:', square.width); // Output: Square Width: 4
console.log('Square Height:', square.height); // Output: Square Height: 4
