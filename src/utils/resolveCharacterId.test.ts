import { resolveCharacterId } from './resolveCharacterId';

describe('getCharacterIds', () => {
  it('returns an array of character IDs', () => {
    const characters = [
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
      'https://swapi.dev/api/people/10/'
    ];

    const result = resolveCharacterId(characters);

    expect(result).toEqual([2, 3, 10]);
  });

  it('ignores characters without ID', () => {
    const characters = [
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/',
      'https://swapi.dev/api/people/10/'
    ];

    const result = resolveCharacterId(characters);

    expect(result).toEqual([2, 10]);
  });
});
