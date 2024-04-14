import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pockemonName = await getPokemonById(pokemonId);
    expect(pockemonName).toBe('bulbasaur');
  });

  test('getPokemonById should return an error if pockemon not exist', async () => {
    const pokemonId = 100000;
    try {
      await getPokemonById(pokemonId);
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});