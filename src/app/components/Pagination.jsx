'use client'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevePage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-2xl">
            { page <= 1 ? null : 
                <button onClick={handlePrevePage}><BsArrowLeft /></button>
            }
            <p>{page} of {lastPage}</p>
            { page >= lastPage ? null : 
                <button onClick={handleNextPage}><BsArrowRight /></button>
            }
        </div>
    )
}

export default Pagination