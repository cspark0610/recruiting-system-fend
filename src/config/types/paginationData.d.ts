type PaginationData = {
  docs: any[];
  totalDocs: number;
  limit: number;
  hasNextPage: boolean;
  nextPage: number;
  totalPages: number;
  page: number;
  prevPage: number;
  hasPrevPage: boolean;
  pagingCounter: number;
  offset: number;
};

export default PaginationData;
