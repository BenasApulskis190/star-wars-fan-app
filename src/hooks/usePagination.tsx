type Pagination = {
  idsForCurrentPage: () => number[];
};

function usePaginationIds(
  itemIds: number[],
  itemsPerPage: number,
  page: number
): Pagination {
  function idsForCurrentPage(): number[] {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return itemIds.slice(startIndex, endIndex);
  }

  return { idsForCurrentPage };
}

export default usePaginationIds;
