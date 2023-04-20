export type MovieImage = {
  id: number;
  image: string;
};

export const resolveMovieImages = (
  movieImages: MovieImage[],
  episodeId: string
): MovieImage | null =>
  movieImages.find((m) => Number(m.id) === Number(episodeId)) ?? null;
