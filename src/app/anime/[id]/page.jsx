import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Page = async({params: {id}}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`)
    const anime = await response.json() 
    console.log(anime)
    return(
        <>
            <div className="pt-4 px-4 text-center">
                <h3 className="sm:text-2xl text-lg font-bold">{anime.data.title}</h3>
            </div>
            <div className="flex items-center gap-1 px-4 justify-center">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <p className="ml-2">{anime.data.score} Score</p>
            </div>
            <div className="px-4 flex justify-center">
                <Image src={anime.data.images.webp.image_url} width={250} height={250} />
            </div>
            <div className="text-center font-bold sm:text-2xl text-lg pt-4">
                <Link href={anime.data.trailer.url} className="hover:underline hover:text-gray-500">Trailer</Link>
            </div>
            <div className="text-center pt-4">
                <h1 className="sm:text-2xl text-lg font-bold">Movie Info</h1>
                <h3>Type: {anime.data.type}</h3>
                <h3>Source: {anime.data.source}</h3>
                <h3>Year: {anime.data.year}</h3>
                <h3>Season: {anime.data.season}</h3>
                <h3>Episodes: {anime.data.episodes}</h3>
                <h3>Rank: {anime.data.rank}</h3>
            </div>
            <div className="px-10 py-4">
                <h1 className="sm:text-2xl text-lg font-bold text-center">Synopsis</h1>
                <p>{anime.data.synopsis}</p>
            </div>
             
        
        </>
    )
}

export default Page