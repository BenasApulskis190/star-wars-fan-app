import { MovieImage, resolveMovieImages } from './resolveMovieImages';

const movieImages: MovieImage[] = [
  { id: 1, image: 'image1.jpg' },
  { id: 2, image: 'image2.jpg' },
  { id: 3, image: 'image3.jpg' }
];

describe('resolveMovieImages', () => {
  test('returns matching MovieImage object when episodeId exists', () => {
    const episodeId = '2';
    const expected: MovieImage = { id: 2, image: 'image2.jpg' };

    const result = resolveMovieImages(movieImages, episodeId);

    expect(result).toEqual(expected);
  });

  test('returns null when episodeId does not exist', () => {
    const episodeId = '5';
    const expected: MovieImage | null = null;

    const result = resolveMovieImages(movieImages, episodeId);

    expect(result).toEqual(expected);
  });

  test('returns null when movieImages array is empty', () => {
    const episodeId = '2';
    const expected: MovieImage | null = null;

    const result = resolveMovieImages([], episodeId);

    expect(result).toEqual(expected);
  });
});
