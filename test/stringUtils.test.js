import { test,expect } from 'vitest';
import { transformer } from '../src/stringUtils';

test('Transformer une chaîne vide', () => {
    const result = transformer('');
    expect(result).toBe('');
});

test('Transformer une chaîne avec des caractères en minuscules', () => {
    const result = transformer('hello');
    expect(result).toBe('HELLO');
});

test('Transformer une chaîne avec des caractères spéciaux', () => {
    const result = transformer('!@#$%^&*()');
    expect(result).toBe('!@#$%^&*()');
});
