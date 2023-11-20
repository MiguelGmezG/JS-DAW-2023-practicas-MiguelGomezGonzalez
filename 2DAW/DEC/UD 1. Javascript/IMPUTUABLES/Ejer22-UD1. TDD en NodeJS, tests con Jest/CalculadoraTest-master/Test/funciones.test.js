const { sumar, resta, mult, div } = require("../Funciones.js");


describe("*** VALIDAR SUMAS ***", () => {
    test("1 + 1 = 2", () => {
      expect(sumar(1, 1)).toEqual(2);
    });
  
    test("10 + 20 = 30", () => {
      expect(sumar(10, 20)).toEqual(30);
    });
});
  
describe("*** VALIDAR RESTAS ***", () => {
    test("10 - 2 = 8", () => {
      expect(resta(10, 2)).toEqual(8);
    });
  
  
    test("87 - 523 = -436", () => {
      expect(resta(87, 523)).toEqual(-436);
    });
});
    
describe("*** VALIDAR MULTIPLICACIONES ***", () => {
      test("2 * 4 = 8", () => {
        expect(mult(2, 4)).toEqual(8);
      });
    
      test("1000 * 8.5 = 8500", () => {
        expect(mult(1000, 8.5)).toEqual(8500);
      });
});

describe("*** VALIDAR DIVISIONES ***", () => {
    test("20 / 2 = 10", () => {
      expect(div(20, 2)).toEqual(10);
    });
  
    
    //test("20 / 0 = 0", () => {
    //    expect(div(99, 0).toEqual(0));
    //});
});
    
