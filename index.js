// Your code here

class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  get countSides() {
    return this.arr.length;
  }

  get perimeter() {
    let p = 0;
    for (let i = 0; i < this.arr.length; i++) {
      p += this.arr[i];
    }
    return p;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let isValid2;
    if (
      this.arr[0] + this.arr[1] > this.arr[2] &&
      this.arr[1] + this.arr[2] > this.arr[0] &&
      this.arr[0] + this.arr[2] > this.arr[1]
    ) {
      isValid2 = true;
    } else {
      isValid2 = false;
    }
    return isValid2;
  }
}

class Square extends Polygon {
  get isValid() {
    let isValid2;
    if (
      this.arr[0] === this.arr[1] &&
      this.arr[0] === this.arr[2] &&
      this.arr[0] === this.arr[3]
    ) {
      isValid2 = true;
    } else {
      isValid2 = false;
    }
    return isValid2;
  }
  get area() {
    const perimeter = this.perimeter;
    const area = perimeter / 4;
    return area * area;
  }
}
