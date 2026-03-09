"use client"
import { ICat } from '@/app/interfaces/cat.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// export const revalidate = 30
export default function CatPage() {
    const [cats, setCats] = useState<ICat[]>([])

    useEffect(() => {

        const fetchCats = async () => {
            try {
                const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${process.env.CAT_API}`)
                const data = await res.json()
                setCats(data)
            }
            catch (error) {
                console.log(error)
            }

        }

        fetchCats()
    }, [])
    console.log(cats)
    return (
        <div className='flex w-[800px] m-auto flex-wrap'>
            {cats.map((cat) => (
                <Link href={`ssr/cats/${cat.id}`}>
                    <div key={cat.id} className='w-56 h-64 relative  m-2'>
                        <img
                            src={cat.url}
                            alt={cat.url}
                            width={cat.width}
                            height={cat.height}
                            className='object-cover'
                        // fill={true}
                        />
                    </div>
                </Link>

            ))}
        </div>
    )
}
