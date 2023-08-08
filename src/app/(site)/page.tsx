import Achievement from '@/components/Achievement/Achievement'
import React from 'react'
import newOne from "../../../assets/newOne.jpg"
import newTwo from "../../../assets/newTwo.jpg"

const AdminDashboard = () => {
        return (
                <div className='flex flex-row gap-5'>
                        <div className='w-[70%] p-3'>
                                <p className='text-[19px] font-semibold my-2'>Welcome Back <span className='font-extrabold'>Buringiro Saad</span></p>
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Statistics of  Rwanda Coding Academy</p>
                        </div>
                        <div className='w-[30%]  h-full bg-[#D9D9D975] border-2 border-[#43434305] p-2 rounded-md'>
                                <div>
                                        <div className="flex flex-row justify-between">
                                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Achievements</p>
                                                <div className="h-10 w-10 rounded-full bg-[#687CE2] text-white flex justify-center items-center">82</div>
                                        </div>
                                        <div>
                                                <Achievement image={newOne} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                                                <Achievement image={newTwo} date={"Sunday 24th September, 2020"} title={"World Bank Fund RCA tomorrow"} content={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci . . ."} />
                                        </div>
                                </div>
                                <div>
                                        <p className='text-[rgba(0,0,0,0.43)] my-2 text-[17px]'>Publish School Anouncements</p>
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>These are only visible to the students who use the school platform</p>
                                        <form>
                                                <input type="text" placeholder='Anouncement Heading' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full' />
                                                <textarea placeholder='Anouncement Body' className="text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2"></textarea>
                                                <input type="submit" value="Publish Anouncement"   className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2'/>
                                        </form>
                                </div>
                        </div>

                </div>
        )
}

export default AdminDashboard