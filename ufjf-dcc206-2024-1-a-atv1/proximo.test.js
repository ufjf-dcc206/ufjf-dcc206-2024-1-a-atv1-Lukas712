import {test, expect, describe} from "vitest";
import {proximo} from "./proximo.js";

describe('proximo()', async () => {
    test ('deve retornar 1 ao receber 0', () => {
        expect(proximo(0)).toBe(1);
    });
    
    test ('deve retornar 3 ao receber 1', () => {
        expect(proximo(1)).toBe(3);
    });
    
    test ('deve retornar 5 ao receber 2', () => {
        expect(proximo(2)).toBe(5);
    });
    
    test ('deve retornar 4 ao receber 3', () => {
        expect(proximo(3)).toBe(4);
    });
    
    test ('deve retornar 6 ao receber 6', () => {
        expect(proximo(4)).toBe(6);
    });
});

