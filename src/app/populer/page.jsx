"use client"

import React from "react"
import Pagination from "@/app/components/Pagination"
import { useEffect, useState } from "react"
import Card from "@/app/components/card"
import Slider from "@/app/components/slider"
import Navbar from "@/app/components/navbar"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const data = await response.json()
        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <Slider />
            <Navbar />
            <Card api={topAnime} />
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
    
}

export default Page