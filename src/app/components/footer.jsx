'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import Store from "@/assets/Apple store 1.png"
import Play from "@/assets/google play 1.png"
import Insta from "@/assets/instagram 1.png"
import Pinte from "@/assets/pinterest 1.png"
import Face from "@/assets/face 1.png"

export default function Footer(){
    return(
        <footer className="bg-gray-950 sm:py-5 sm:px-14 p-3">
            <div className='sm:flex sm:justify-between px-3 sm:px-0'>
                <div className='sm:max-w-xs'>
                    <Image src={Logo} alt="logo" className="w-14" />
                    <p className="text-white text-sm pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam aperiam est a veritatis recusandae rem temporibus ea saepe praesentium numquam quae optio facere nobis non dignissimos soluta, voluptates perspiciatis.</p>
                </div>

                    <ul className='flex sm:flex-col text-sm font-medium text-white justify-center mt-4 sm:mt-0'>
                        <li className="pb-4">
                        <a href="#" className="mr-2 hover:underline md:mr-6">
                            Tentang Kami
                        </a>
                        </li>
                        <li className="pb-4">
                        <a href="#" className="mr-2 hover:underline md:mr-6">
                            Blog
                        </a>
                        </li>
                        <li className="pb-4">
                        <a href="#" className="mr-2 hover:underline md:mr-6 ">
                            Layanan
                        </a>
                        </li>
                        <li className="pb-4">
                        <a href="#" className="mr-2 hover:underline md:mr-6">
                            Karir
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline">
                            Pusat Media
                        </a>
                        </li>
                    </ul>

                <div className="sm:mr-5">
                    <h3 className='text-center sm:text-left font-medium text-white'>Download</h3>
                    <div className="sm:flex sm:w-40 w-24 mx-auto sm:mx-0">
                        <Link href="https://play.google.com/"><Image src={Play} alt="play"/></Link>
                        <Link href="https://www.apple.com/app-store/"><Image src={Store} alt="apple" /></Link>
                    </div>
                    <h3 className="text-center sm:text-left font-medium text-white">Social media</h3>
                    <div className='flex justify-around sm:justify-normal w-28 gap-2 mx-auto sm:mx-0'>
                        <Link href="https://facebook.com/"><Image src={Face} alt='facebook' /></Link>
                        <Link href="https://pinterest.com/"><Image src={Pinte} alt='pinterest' /></Link>
                        <Link href="https://instagram.com/"><Image src={Insta} alt='instagram'/></Link>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white text-center ">
                Copyright © 2000-202 MilanTV. All Rights Reserved.
                </span>
        </footer>
    )

} 