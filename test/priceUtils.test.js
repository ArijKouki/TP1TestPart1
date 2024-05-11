import { test,expect } from 'vitest';
import { isPriceInRange } from '../src/priceUtils';

test('Test du prix dans la plage', () => {
    expect(isPriceInRange(100, 50, 150)).toBe(true);
});

test('Test du prix en dehors de la plage', () => {
    expect(isPriceInRange(5, 10, 20)).toBe(false);
    expect(isPriceInRange(200, 50, 150)).toBe(false);
});

test('Test des limites de la plage', () => {
    expect(isPriceInRange(0, 0, 10)).toBe(true);
    expect(isPriceInRange(10, 0, 10)).toBe(true);
});

test('Test des cas spéciaux', () => {
    // Plage négative
    expect(isPriceInRange(5, 10, 0)).toBe(false);

    // Plage avec le même minimum et maximum
    expect(isPriceInRange(5, 5, 5)).toBe(true);

    // Prix négatif
    expect(isPriceInRange(-5, 0, 10)).toBe(false);
});

test('Entrées invalides : paramètres non numériques', () => {
    expect(isPriceInRange("abc", "def", "ghi")).toBe(false);
});
