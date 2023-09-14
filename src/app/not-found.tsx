import { Inter, Poppins } from "next/font/google"
import Image from "next/image"
import "./globals.css"
import notFound from  "../assets/404.svg"

const poppins = Poppins({ subsets: ['latin'], weight:['100', '200','300','400','500','600','700','800','900']})

const NotFound = ()=>{
    return(
        <div>
                {/* <Image src={notFound} alt="" className="w-[100px] h-[100px]"/> */}
                <p className="text-[7px] m-auto">Page not found</p>
        </div>
    )
}

export default NotFound