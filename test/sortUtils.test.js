import { test,expect } from 'vitest';
import { trier } from '../src/sortUtils';

test('Tri d\'un tableau ordonné', () => {
    const input = [1, 2, 3, 4, 5];
    const result = trier(input);

    // Assertion pour vérifier si le tableau retourné est identique au tableau d'entrée
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Tri d\'un tableau inversé', () => {
    const input = [5, 4, 3, 2, 1];
    const result = trier(input);

    // Assertion pour vérifier si le tableau retourné est trié par ordre croissant
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Tri d\'un tableau avec des nombres négatifs', () => {
    const input = [-5, 3, 0, -10, 8];
    const result = trier(input);

    // Assertion pour vérifier si le tableau retourné est trié par ordre croissant
    expect(result).toEqual([-10, -5, 0, 3, 8]);
});

test('Tri d\'un tableau vide', () => {
    const input = [];
    const result = trier(input);

    // Assertion pour vérifier si le tableau retourné est vide
    expect(result).toEqual([]);
});

test('Tri d\'un tableau avec un seul élément', () => {
    const input = [42];
    const result = trier(input);

    // Assertion pour vérifier si le tableau retourné est identique au tableau d'entrée
    expect(result).toEqual([42]);
});

test('Tri d\'un tableau avec des éléments identiques', () => {
    const input = [3, 3, 3, 3, 3];
    const result = trier(input);

    // Assertion pour vérifier si le tableau retourné est identique au tableau d'entrée
    expect(result).toEqual([3, 3, 3, 3, 3]);
});

test('Tri d\'un tableau avec des éléments non numériques', () => {
    const input = ['foo', 'bar', 'baz'];

    // Assertion pour vérifier si une erreur est levée lorsque des éléments non numériques sont présents dans le tableau
    expect(() => {
        trier(input);
    }).toThrow();
});
