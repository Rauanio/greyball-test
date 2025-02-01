import { useMemo } from 'react';
import {
  pageSelector,
  limitSelector,
  searchSelector,
  sortSelector,
} from './filterSelectors';
import { useAppSelector } from '@/shared/hooks/redux';

export const useFilters = () => {
  const page = useAppSelector(pageSelector);
  const limit = useAppSelector(limitSelector);
  const search = useAppSelector(searchSelector);
  const sort = useAppSelector(sortSelector);

  const filters = useMemo(
    () => ({
      page,
      limit,
      search,
      sort,
    }),
    [page, limit, search, sort]
  );

  return filters;
};
