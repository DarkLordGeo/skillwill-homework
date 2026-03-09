import React from 'react'
import { getCats } from '@/app/services/getCats'
import { ICat } from '@/app/interfaces/cat.interfaces'
import Link from 'next/link'
export default async function CatsPage() {
    const cats: ICat[] = await getCats()

    return (
        <div className='flex w-[800px] m-auto flex-wrap'>
            {cats.map((cat) => (
                // <Link href={`/ssr/cats/${cat.id}`}>
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
                // </Link>

            ))
            }
        </div >
    )
}
