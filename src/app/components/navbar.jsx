
export default function navbar(){
    return (
        <div>
            <div className="mt-4 px-5 font-bold sm:text-3xl text-xl">
                <h1>Browse by category</h1>
            </div>
            <div className='mt-4 px-5 flex gap-4 font-semibold sm:text-xl text-base'>
                <a href="/" className='hover:underline hover:text-gray-500'><h1>Home</h1></a>
                <a href="/populer" className='hover:underline hover:text-gray-500'><h1>Terbaru</h1></a>
                <a href="/populer" className='hover:underline hover:text-gray-500'><h1>Populer</h1></a>
            </div>
        </div>
    )
}