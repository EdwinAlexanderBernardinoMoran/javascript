class Rectangle {
    #area = 0;

    constructor(base = 0, height = 0) {
        this.base = base;
        this.height = height;

        this.#area = base * height;
    }

    calculateArea() {
        return this.#area * 2;
    }
}

const rectangle = new Rectangle(10, 15);
// rectangle.#area = 100;

console.log(rectangle);
console.log(rectangle.calculateArea());