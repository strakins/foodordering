import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='hero mt-2'>
        <div className='my-12'>
            <h1 className='text-3xl font-semibold'>
                Everything is better with <br/> a <span className='text-primary'>Pizza</span> 
            </h1>
            <p className=' text-gray-400 my-5'>Pizza is the ultimate comfort food, 
                always there to satisfy our cravings. A 
                perfect slice can make any day a little 
                brighter
            </p>
            <div className='flex gap-3 my-3 text-xs md:text-lg'>
                <button className='bg-primary py-2 px-4 text-white rounded-md flex items-center'>
                    Order Now
                    <Right className='h-5 ml-3' />
                </button>
                <button className='bg-success py-2 px-4 text-white  rounded-md'>Learn More</button>
            </div>
        </div>
        <div className='relative'>
            <Image src={"/pizza.jpg"} 
                alt={"pizza"}  
                layout={'fill'}
                objectFit={'contain'} 
                className='rounded-lg'   
            />
        </div>
    </section>
  )
}

export default Hero