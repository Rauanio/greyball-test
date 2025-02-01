import { RootState } from '@/app/providers/storeProvider/config/store';

export const pageSelector = (state: RootState) => state.filters.page;
export const limitSelector = (state: RootState) => state.filters.limit;
export const searchSelector = (state: RootState) => state.filters.search;
export const sortSelector = (state: RootState) => state.filters.sort;
