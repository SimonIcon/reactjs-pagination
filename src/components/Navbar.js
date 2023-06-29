import React from 'react'

const Navbar = ({ pageNumber }) => {
    return (
        <div className='w-full h-[15%] flex flex-row bg-slate-950 justify-evenly'>
            <div className='uppercase text-white font-serif font-bold text-2xl flex flex-col'>
                <h3>symohDev</h3>
                <h5>page number : {pageNumber + 1}</h5>
            </div>
            <div className='capitalize text-white font-serif font-semibold text-xl'>reactjs pagination</div>


        </div>
    )
}

export default Navbar