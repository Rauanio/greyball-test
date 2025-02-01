import { useAppSelector } from '@/shared/hooks/redux'
import React from 'react'
import { useDispatch } from 'react-redux'
import { filtersActions } from '../model/filterSlice'
import { Filters as FiltersType } from '@/shared/types/filters.types'

export const Filters = () => {
  const dispatch = useDispatch()
  const search = useAppSelector(state => state.filters.search)
  const sort = useAppSelector(state => state.filters.sort)

  return (
    <div className='flex items-center gap-2'>
      <input
        value={search}
        className="border py-1.5 p-2"
        placeholder="Search..."
        onChange={(e) => dispatch(filtersActions.setSearch(e.target.value))}
      />
      
      <label htmlFor="sort" className="mr-2 max-sm:hidden">Sort by price:</label>
      <select 
        id='sort'
        value={sort} 
        className="p-2 border"
        onChange={(e) => dispatch(filtersActions.setSort(e.target.value as FiltersType['sort']))}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}
