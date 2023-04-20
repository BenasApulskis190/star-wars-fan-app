import { renderHook } from '@testing-library/react-hooks';
import usePaginationIds from './usePagination';

describe('usePaginationIds', () => {
  test('returns the correct ids for the current page', () => {
    const itemIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemsPerPage = 5;

    const { result } = renderHook(() =>
      usePaginationIds(itemIds, itemsPerPage, 0)
    );
    const { idsForCurrentPage } = result.current;

    expect(idsForCurrentPage()).toEqual([1, 2, 3, 4, 5]);

    const { result: result2 } = renderHook(() =>
      usePaginationIds(itemIds, itemsPerPage, 1)
    );
    const { idsForCurrentPage: idsForCurrentPage2 } = result2.current;

    expect(idsForCurrentPage2()).toEqual([6, 7, 8, 9, 10]);
  });

  test('returns an empty array when there are no item ids', () => {
    const itemIds: number[] = [];
    const itemsPerPage = 5;

    const { result } = renderHook(() =>
      usePaginationIds(itemIds, itemsPerPage, 0)
    );
    const { idsForCurrentPage } = result.current;

    expect(idsForCurrentPage()).toEqual([]);
  });

  test('returns an empty array when the current page is out of range', () => {
    const itemIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemsPerPage = 5;

    const { result } = renderHook(() =>
      usePaginationIds(itemIds, itemsPerPage, 2)
    );
    const { idsForCurrentPage } = result.current;

    expect(idsForCurrentPage()).toEqual([]);
  });
});
