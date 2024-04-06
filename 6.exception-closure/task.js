﻿const parseCount = (value) => {
	const parsed = Number.parseFloat(value);
	if (isNaN(parsed)) {
		throw new Error("Невалидное значение");
	}
	return parsed;
};

const validateCount = (value) => {
	try {
		return parseCount(value);
	} catch (error) {
		return error
	}
};

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
		return +result.toFixed(3);
	}
}

const getTriangle = (a, b, c) => {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
		};
	}
};

