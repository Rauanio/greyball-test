import { FiltersState } from '@/shared/types/filters.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: FiltersState = {
  page: 1,
  limit: 4,
  search: '',
  sort: 'desc'
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<FiltersState['page']>) => {
      state.page = action.payload;
      return state;
    },
    setLimit: (state, action: PayloadAction<FiltersState['limit']>) => {
      state.limit = action.payload;
      return state;
    },
    setSearch: (state, action: PayloadAction<FiltersState['search']>) => {
      state.search = action.payload;
      return state;
    },
    setSort: (state, action: PayloadAction<FiltersState['sort']>) => {
      state.sort = action.payload;
      return state;
    },
    resetFilters: () => initialState,
  },
});

export const { actions: filtersActions } = filtersSlice;
export const { reducer: filtersReducer } = filtersSlice;
