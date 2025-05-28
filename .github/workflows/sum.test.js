const sum = require('./src/matworkflows');

test('soma 1 + 2 para igualar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma números negativos', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('soma 0 e um número positivo', () => {
    expect(sum(0, 5)).toBe(5);
});

test('soma 0 e um número negativo', () => {
    expect(sum(0, -5)).toBe(-5);
    });

test('soma dois números iguais', () => {
    expect(sum(5, 5)).toBe(10);
    });

test('soma números decimais', () => {
    expect(sum(1.5, 2.5)).toBe(4);
});