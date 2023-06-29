import React from 'react'

const DisplayUsers = ({ data, currentPage, todosPerPage }) => {
    return (
        <div className='w-full h-[75%] flex flex-row flex-wrap'>
            {
                data.slice(currentPage, currentPage + todosPerPage).map((item) => (
                    <div key={item.id} className='bg-cyan-500 h-[30vh] my-1 mx-1 w-[19vw] flex flex-col items-center
                    justify-evenly'>
                        <div className='flex flex-row  justify-between items-center'>
                            <span className='uppercase font-semibold text-xl'>job id</span>
                            <span className='lowercase font-semibold ml-4 text-red-600'>{item.id}</span>

                        </div>
                        <h4 className='uppercase font-serif font-semibold underline text-xl'>job title</h4>
                        <p className='pl-2 font-thin font-sans italic capitalize'>{item.title}</p>
                        <div className='flex flex-row justify-between items-center'>
                            <span className='capitalize font-semibold'>complete status</span>
                            {
                                item.completed === true ? (
                                    <span className='ml-2 text-green-900 text-2xl font-semibold capitalize'>true</span>
                                ) : (<span className='ml-2 text-red-800 text-2xl font-semibold capitalize'>false</span>)
                            }
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default DisplayUsers