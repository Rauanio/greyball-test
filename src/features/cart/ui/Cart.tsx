/* eslint-disable @next/next/no-img-element */
'use client'

import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux'
import Image from 'next/image'
import React from 'react'
import { removeFromCart } from '../model/cartSlice'
import { Button } from '@/shared/ui/Button/Button'
import { formatPrice } from '@/shared/utils/formatPrice'

export const Cart = () => {
    const items = useAppSelector(state => state.cart.items)
    const total = useAppSelector(state => state.cart.totalCount)
    const totalItems = useAppSelector(state => state.cart.totalItems)

    const dispatch = useAppDispatch()

    return (
        <div className='absolute max-w-96 top-full z-20 bg-white right-3 border min-w-72 rounded-md border-gray-300 p-4 mt-2'>
            {items.length === 0 ? <div className='flex items-center justify-center min-h-28'>Cart is Empty</div> :<div>
                <div className='flex justify-between items-center border-b border-gray-300 pb-3 '>
                    <div className='flex gap-1 items-center'>
                        <Image src={'cart.svg'} width={20} height={20} alt='' />
                        <span className='bg-blue-500 text-white px-1.5 py-0.5 rounded-full text-xs'>{totalItems}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='text-gray-500'>Total</p>: <span className='text-green-500'>${formatPrice(total)}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-3 py-3'>
                    {items.map(item => (
                        <div key={item.id} className='flex gap-1'>
                            <img src={item.image} alt="" className='w-20' />
                            <div className='flex flex-col gap-1'>
                                <h4 className='font-semibold line-clamp-2 text-sm'>{item.name}</h4>
                                <div className='flex gap-1 items-center'>
                                    <span className='text-green-500 text-sm'>${formatPrice(item.price)}</span>
                                    <p className='text-gray-400 text-sm'>Quantity: {item.quantity}</p>
                                </div>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>
                                    <Image src={'trash.svg'} width={20} height={20} alt=""></Image>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <Button className='w-full' size='tiny'>Checkout</Button>
            </div>}

        </div>
    )
}
