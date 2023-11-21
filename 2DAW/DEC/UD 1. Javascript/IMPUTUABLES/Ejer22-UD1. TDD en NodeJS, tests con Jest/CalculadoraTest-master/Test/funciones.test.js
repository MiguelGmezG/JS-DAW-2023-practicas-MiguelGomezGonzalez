const { sumar, resta, mult, div } = require("../Funciones");

describe("*** VALIDAR SUMAS ***", () => {
    test("1 + 1 = 2", () => {
        expect(sumar(1, 1)).toEqual(2);
    });

    test("10 + 20 = 30", () => {
        expect(sumar(10, 20)).toEqual(30);
    });

    test("0 + 0 = 0", () => {
        expect(sumar(0, 0)).toEqual(0);
    });

    test("-5 + 5 = 0", () => {
        expect(sumar(-5, 5)).toEqual(0);
    });
});

describe("*** VALIDAR RESTAS ***", () => {
    test("10 - 2 = 8", () => {
        expect(resta(10, 2)).toEqual(8);
    });

    test("87 - 523 = -436", () => {
        expect(resta(87, 523)).toEqual(-436);
    });

    test("0 - 0 = 0", () => {
        expect(resta(0, 0)).toEqual(0);
    });

    test("-5 - (-5) = 0", () => {
        expect(resta(-5, -5)).toEqual(0);
    });
});

describe("*** VALIDAR MULTIPLICACIONES ***", () => {
    test("2 * 4 = 8", () => {
        expect(mult(2, 4)).toEqual(8);
    });

    test("1000 * 0.5 = 500", () => {
        expect(mult(1000, 0.5)).toEqual(500);
    });

    test("0 * 100 = 0", () => {
        expect(mult(0, 100)).toEqual(0);
    });

    test("-3 * 2 = -6", () => {
        expect(mult(-3, 2)).toEqual(-6);
    });
});

describe("*** VALIDAR DIVISIONES ***", () => {
    test("20 / 2 = 10", () => {
        expect(div(20, 2)).toEqual(10);
    });

    test("1 / 3 = 0.3333 (aproximadamente)", () => {
        expect(div(1, 3)).toBeCloseTo(0.3333, 4);
    });

    test("5 / 0 lanza una excepción", () => {
        expect(() => div(5, 0)).toThrow();
    });

    test("0 / 10 = 0", () => {
        expect(div(0, 10)).toEqual(0);
    });
});

