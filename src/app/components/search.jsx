import Image from 'next/image'
import logo from '@/assets/logo.svg'
import InputSearch from './inputSearch'

const search = () => {
    return (
        <header className="container mx-auto ">
            <div className='flex justify-between items-center sm:py-3 p-1'>
                <a href="/"><Image src={logo} alt="logo" width="" height="" className='w-14 sm:w-20'/></a>
                <div className='sm:m-auto'>
                    <InputSearch />
                </div>
            </div>
        </header>
    )
    
}

export default search