import Image from "next/image"
import Link from "next/link"

const card = ({ api }) => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 p-4 ">
          {api.data?.map((anime, index) => {
            return (
                <Link href={`/anime/${anime.mal_id}`} className="cursor-pointe" key={index}>
                    <Image src={anime.images.webp.image_url} alt="" width={300} height={300} id="card" className="w-full sm:h-80 h-44 rounded-md"/>
                    <h3 className="font-bold md:text-lg text-sm p-1">{anime.title}</h3>
                    <p className="px-1">Anime</p>
                </Link>
            )
          })}    
        </div>
    )
}

export default card