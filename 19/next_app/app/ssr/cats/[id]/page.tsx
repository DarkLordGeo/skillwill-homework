import { ICat } from "@/app/interfaces/cat.interfaces"
import { getCats } from "@/app/services/getCats"

interface CatPageProps {
    params: {
        id: string
    }
}


export async function generateStaticParams() {
    const cats: ICat[] = await getCats()

    return cats.map((cat) => {
        slug: cat.id.toString()
    })
}

const fetchCat = async (id: string) => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
    return res.json()
}
export default async function CatPage({ params: { id } }: CatPageProps) {
    const cat: ICat = await fetchCat(id)
    return (
        <div className='flex w-[800px] m-auto flex-wrap'>
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
        </div>
    )
}
