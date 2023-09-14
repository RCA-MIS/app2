'use client'
import Link from "next/link"
import logo from "../../assets/logo.png"
import Image from "next/image"
import search from "../../assets/search.png"
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
    const handleMenu = ()=>{
        setShowMenu((prev)=>!prev)
    }
    return (
        <div className="w-full">
            <div className="upper-container w-full sm:flex justify-between px-9 py-1">
                <Link className="text-lg" href={"/"}>Welcome to <span className="text-purpleColor">Rwanda Coding Academy</span></Link>

                <span className="flex gap-1"><Link href={"/login"}>Student</Link> / <Link href={"/login"}>Staff Portal</Link></span>
            </div>
            <div className="w-full flex justify-between lg:px-6 md:px-1  lower-navbar py-6 items-center text-white">
                <Link href={"/"}><Image src={logo} alt={""} /></Link>
                <div className="hidden md:flex md:gap-1 lg:gap-6 bg-[#]">
                    <Link href={"/about_us"}>
                        About&nbsp;us<span>| </span>
                    </Link>
                    <Link href={"/academics"}>Academics<span>| </span></Link>
                    <Link href={"/news"}>News<span>| </span></Link>
                    <Link href={"/innovations"}>Innovations<span>| </span></Link>
                    <Link href={"/campus_life"}>Campus&nbsp;life<span>| </span></Link>
                    <Link href={"/admissions"}>Admissions<span>| </span></Link>
                    <Link href={"/alumni"}>Alumni<span>| </span></Link>
                    <Link href={"/contact_us"}>Contact&nbsp;us</Link>
                </div>

                <div className=" py-2 md:px-1 lg:px-4 bg-[#D9D9D9] rounded-md cursor-pointer">
                    {/* <input className="w-12 py-2 px-4 bg-[#D9D9D9] rounded-md cursor-pointer focus:w-full outline-none text-black" /> */}
                    <Image src={search} alt=""/>
                </div>
                <div className="text-2xl md:hidden hover:cursor-pointer" onClick={()=>handleMenu()}>
                    {showMenu?(<AiFillCloseCircle />):(  <AiOutlineMenu />)}
                  
                </div>
                    
                {/* </div> */}  
            </div>
            {showMenu &&(
            <div className=" flex flex-col md:hidden bg-white z-40 divide-y-2  space-y-2 ">
                    <Link href={"/about_us"}>
                        About us
                    </Link>
                    <Link href={"/academics"}>Academics</Link>
                    <Link href={"/news"}>News</Link>
                    <Link href={"/innovations"}>Innovations</Link>
                    <Link href={"/campus_life"}>Campus life</Link>
                    <Link href={"/admissions"}>Admissions</Link>
                    <Link href={"/alumni"}>Alumni</Link>
                    <Link href={"/contact_us"}>Contact us</Link>
                </div>

            )}
        {
      

        }
            
        </div>
    )
}

export default Navbar