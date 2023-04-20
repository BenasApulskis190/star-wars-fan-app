export const resolveCharacterId = (characters: string[]): number[] =>
  characters
    .map((characterUrl) => {
      const match = characterUrl.match(/\/(\d+)\/$/);
      if (!match) {
        return null;
      }
      return Number(match[1]);
    })
    .filter((id) => id !== null) as number[];
