import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface Props {
        date: String,
        title: string,
        content: String
        image: StaticImageData
}
const Achievement = ({ date, title, content, image }: Props) => {
        return (
                <div className="w-full h-[100px] my-4 flex justify-between items-center border border-[#ccc] py-2 px-1 rounded-lg">
                        <div className="w-2/5 h-[90%] rounded-lg bg-slate-100">
                        </div>
                        <div className="w-3/5 flex flex-col mx-3">
                                <h4 className="pb-4 text-[#434343ba] text-[10px]">{date}</h4>
                                <h3 className="font-extrabold pb-4 test-[#49494af0] text-sm">{title}</h3>s
                                <h6 className="text-[#434343ba] text-xs">{content}</h6>
                        </div>
                </div>
        )
}

export default Achievement