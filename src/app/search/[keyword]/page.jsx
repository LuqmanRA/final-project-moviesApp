import Card from "@/app/components/card"
import Navbar from "@/app/components/navbar"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  const searchAnime = await response.json()
  return (
        <div>
            <Navbar />
            <Card api={searchAnime} />
        </div>
      
  )
}

export default Page
