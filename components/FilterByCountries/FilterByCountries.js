import React, {useRef} from 'react'
import { useDraggable } from "react-use-draggable-scroll";
import Link from "next/link";


function FilterByCountries({listCountries}) {
  const ref = useRef();               
  const { events } = useDraggable(ref);
  return (
    <div className='my-10'>
        <h1 className='text-xl font-bold'>Countries</h1>
        <div className='flex overflow-y-auto py-4 scrollbar-hide' {...events} ref={ref}>
          {
            listCountries.map((index, key) => {
              return(
                <Link key={key} href={`/countries/${index.strArea}`}>
                  <a><div className='bg-[#FAC213] rounded-full text-base px-4 py-1 font-medium mx-3'>{index.strArea}</div></a>
                </Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default FilterByCountries