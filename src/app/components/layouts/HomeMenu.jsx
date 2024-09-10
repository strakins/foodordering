import Image from 'next/image'
import React from 'react'
import MenuItem from '../menus/MenuItem'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
  return (
    <section className=''>
        <div className='absolute left-0 right-0 w-full justify-start overflow-x-hidden'>
            <div className='h-20 w-20 absolute -top-16 -z-10 -left-5'>
                <Image 
                    src={'/sallad1.png'} 
                    alt={'salad'} 
                    layout={'fill'}
                    objectFit={'contain'} 
                />
            </div>
            <div className='h-48 w-48 absolute -top-24 -z-10 -right-5'>
                <Image 
                    src={'/sallad2.png'} 
                    alt={'salad'} 
                    layout={'fill'}
                    objectFit={'contain'} 
                />
            </div>

        </div>
        <div className='text-center my-4'>
           <SectionHeaders mainHeader={"check out"} subHeader={"Menu"} />
        </div>
        <article className='grid grid-cols-3 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </article>
    </section>
  )
}

export default HomeMenu