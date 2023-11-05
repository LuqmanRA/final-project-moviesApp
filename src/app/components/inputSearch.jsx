'use client'

import { useRouter } from "next/navigation"
import { useRef } from "react"

const inputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if (!keyword) {
            return
        }
        
        if(event.key === "Enter"){
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    
    }
    
    return (
        <div>
            <input type="text" placeholder="Search movie" ref={searchRef} onKeyDown={handleSearch} className="outline-none border border-gray-400 rounded-md sm:px-2 sm:py-1 sm:w-96 px-1 text-black"/>
        </div>
    )
}

export default inputSearch