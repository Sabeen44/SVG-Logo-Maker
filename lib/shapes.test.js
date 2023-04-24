const { Circle, Square, Triangle } = require("./shapes");

describe("Shapes", () => {
  describe("Triangle", () => {
    it("triangle renders correctly", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue"/>`
      );
    });
  });

  describe("Square", () => {
    it("square renders correctly", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        `<rect x="50" height="200" width="200" fill="red"/>`
      );
    });
  });

  describe("Circle", () => {
    it("circle renders correctly", () => {
      const shape = new Circle();
      shape.setColor("purple");
      console.log(shape.render());
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="purple"/>`
      );
    });
  });
});
