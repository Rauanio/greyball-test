'use client'

import { Filters, filtersActions } from '@/features/filters';
import { limitSelector, pageSelector } from '@/features/filters/model/filterSelectors';
import { ProductCard } from '@/features/products';
import { getTotalCount } from '@/features/products/api/getTotalCount';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { Product } from '@/shared/types/product.types';
import { Header } from '@/shared/ui/Header';
import { Pagination } from '@/shared/ui/Pagination/Pagination';
import { Spinner } from '@/shared/ui/Spinner';
import React, { useCallback, useEffect, useState } from 'react'

export const App = ({ products }: { products: Product[] }) => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(pageSelector)
  const limit = useAppSelector(limitSelector)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const fetchTotalItems = async () => {
      const fetchedTotalItems = await getTotalCount();
      setTotalItems(fetchedTotalItems);
    };

    fetchTotalItems();
  }, [])

  const totalPages = Math.ceil(totalItems / limit);

  const onChangePage = useCallback(
    (page: number) => {
      dispatch(filtersActions.setPage(page));
    },
    [dispatch]
  );

  const onChangeLimit = useCallback(
    (selected: string) => {
      dispatch(filtersActions.setLimit(+selected));
      onChangePage(1);
    },
    [dispatch, onChangePage]
  );

  return (
    <section>
      <Header />
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-5 max-w-[900px] p-5">
          <Filters />
          <h1 className="text-center font-semibold text-lg">Products</h1>
          {products.length === 0 &&
            <div className='flex justify-center items-center min-h-36'>
              <Spinner className='w-20 h-20' />
            </div>}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {products?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Pagination
              onPageChange={onChangePage}
              currentPage={page}
              totalPages={totalPages}
              onNext={() => onChangePage(page + 1)}
              onPrev={() => onChangePage(page - 1)}
            />
            <select className='p-2 border' onChange={(e) => onChangeLimit(e.target.value)}>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
