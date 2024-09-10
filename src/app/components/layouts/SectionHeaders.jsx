import React from 'react'

const SectionHeaders = ({subHeader, mainHeader}) => {
  return (
    <>
        <h3 className='uppercase text-gray-500 font-semibold'>
             {mainHeader} 
        </h3>
        <h2 className='text-4xl text-primary font-bold'>
          {subHeader} 
        </h2>
    </>
  )
}

export default SectionHeaders