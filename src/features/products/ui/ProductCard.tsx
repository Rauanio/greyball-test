/* eslint-disable @next/next/no-img-element */
'use client'

import { addToCart } from '@/features/cart'
import { useAppDispatch } from '@/shared/hooks/redux'
import { Product } from '@/shared/types/product.types'
import { Button } from '@/shared/ui/Button/Button'
import { StarRating } from '@/shared/ui/StarRating'
import { formatPrice } from '@/shared/utils/formatPrice'
import React from 'react'

export const ProductCard = ({ product }: { product: Product }) => {
  const dispath = useAppDispatch()
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-lg">
      <div className="relative w-full">
        <img
          src={product?.image}
          className="rounded-lg h-48 w-full object-cover"
          alt={product?.name}
        />
      </div>
      <h1 className="font-semibold line-clamp-2 text-sm">{product?.name}</h1>
      <h2 className="text-green-500 text-sm font-semibold">
        $ {formatPrice(product?.price)}
      </h2>
      <p className="text-xs text-gray-500 line-clamp-2">
        {product?.description}
      </p>
      <StarRating rating={product.rating} />
      <div className="flex items-center gap-4 w-full">
        <div className="w-full">
          <Button onClick={() => dispath(addToCart({ ...product, quantity: 1 }))} className="w-full">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}
