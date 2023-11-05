import Slider from "@/app/components/slider"
import Card from "@/app/components/card"
import Navbar from "@/app/components/navbar"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=15`)
  const topAnime = await response.json()
  return (
      <div>
        <Slider />
        <Navbar />
        <Card api={topAnime} />
        <div className="sm:text-xl text-base font-bold text-center py-3">
          <a href="/populer" className="hover:underline hover:text-gray-500"><h1>Other</h1></a>
        </div>
      </div>
  )
}

export default Page
