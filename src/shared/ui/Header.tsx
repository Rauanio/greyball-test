'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useAppSelector } from '../hooks/redux'
import { Cart } from '@/features/cart/ui/Cart'

export const Header = () => {
    const totalItems = useAppSelector(state => state.cart.totalItems)
    const [open, setOpen] = useState(false)

    return (
        <div className='flex items-center relative justify-between w-full border-b border-gray-300 py-3 px-5'>
            <h2>Logo</h2>
            <button className='relative w-fit' onClick={() => setOpen(!open)}>
                {totalItems > 0 && 
                    <div className='absolute z-10 -top-1 -right-2.5 bg-blue-500 text-white p-0.5 px-2 text-xs rounded-full'>
                        {totalItems}
                    </div>
                }
                <Image src={'cart.svg'} width={30} height={30} alt="" />
            </button>
           {open && <Cart />}
        </div>
    )
}
