import React from 'react'

const MenuItem = () => {
  return (
    <div className='bg-gray-300 shadow-md shadow-black/50 rounded-md p-2 text-center transition-all hover:shadow-md hover:shadow-black hover:bg-white '>
        
        <div className='text-center'>
            <img src='/broccoli.jpg' alt='foods' className='rounded-lg max-h-auto max-w-auto block mx-auto'/>
        </div>
        <h4 className='py-3 font-semibold uppercase '>Pepperoni Pizza</h4>
        <p className='text-sm text-gray-500'>  It is a long established fact that a reader will 
            be distracted by the readable content of a page when 
            looking at its layout. 
        </p>
        <button className='mt-4 mb-2 bg-primary px-4 py-1.5 rounded-md text-white'>Add to Cart $12</button>
    </div>
  )
}

export default MenuItem