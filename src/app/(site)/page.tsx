import React from 'react'

const AdminDashboard = () => {
        return (
                <div className='flex flex-row gap-5'>
                        <div className='w-[70%] p-3'>
                                <p className='text-[19px] font-semibold my-2'>Welcome Back <span className='font-extrabold'>Buringiro Saad</span></p>
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Statistics of  Rwanda Coding Academy</p>
                        </div>
                        <div className='w-[30%]  h-full bg-[#D9D9D975] border-2 border-[#43434305] p-2 rounded-md'>
                                <div className="flex flex-row justify-between">
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Achievements</p>
                                        <div className="h-10 w-10 rounded-full bg-[#687CE2] text-white flex justify-center items-center">82</div>
                                </div>
                        </div>

                </div>
        )
}

export default AdminDashboard