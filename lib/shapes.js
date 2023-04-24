class Shape {
  constructor() {}
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
  }
}

module.exports.Triangle = Triangle;
module.exports.Square = Square;
module.exports.Circle = Circle;
