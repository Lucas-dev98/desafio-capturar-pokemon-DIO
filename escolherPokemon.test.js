const escolherPokemon = require('./');

describe('Testes para a função escolherPokemon', () => {
  test('Deve retornar Bulbasaur quando a entrada for 1', () => {
    expect(escolherPokemon(1)).toBe("Voce escolheu o Bulbasaur como seu Pokemon inicial.");
  });

  test('Deve retornar Charmander quando a entrada for 2', () => {
    expect(escolherPokemon(2)).toBe("Voce escolheu o Charmander como seu Pokemon inicial.");
  });

  test('Deve retornar Pikachu quando a entrada for 4', () => {
    expect(escolherPokemon(4)).toBe("Voce escolheu o Pikachu como seu Pokemon inicial.");
  });

  test('Deve retornar Mewtwo quando a entrada for 5', () => {
    expect(escolherPokemon(5)).toBe("Voce escolheu o Mewtwo como seu Pokemon inicial.");
  });

  test('Deve retornar mensagem de erro para entrada inválida', () => {
    expect(escolherPokemon(3)).toBe("Escolha inválida. Tente novamente.");
  });
});
