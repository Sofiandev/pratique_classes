class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get perimeter() {
    return this.height * 2 + this.width * 2;
  }

  get isValid() {
    if (this.height > 0 && this.width > 0) {
      return true;
    } else {
      return false;
    }
  }

  isBiggerThan(shape) {
    if (this.perimeter < shape.perimeter) {
      return `${this.perimeter} est plus petit que ${shape.perimeter}`;
    } else if (this.perimeter > shape.perimeter) {
      return `${this.perimeter} est plus grand que ${shape.perimeter}`;
    } else {
      return "ils sont égaux";
    }
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}

const r = new Rectangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid);
const r2 = new Rectangle(-10, 20);
console.log(r.isValid);
const c = new Square(10);
console.log(c.perimeter);
console.log(c.isBiggerThan(r));
