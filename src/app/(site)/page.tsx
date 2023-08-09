import Achievement from '@/components/Achievement/Achievement'
import React from 'react'
import newOne from "../../assets/newOne.jpg"
import newTwo from "../../assets/newTwo.jpg"

const AdminDashboard = () => {
        const projects = [
                {
                        id: 1,
                        name: "Project A",
                        comments: ["Great work!", "Needs improvement."],
                },
                {
                        id: 2,
                        name: "Project B",
                        comments: ["Impressive!", "Well done."],
                },
                {
                        id: 3,
                        name: "Project C",
                        comments: ["Keep up the good work.", "Very creative."],
                },
        ];
        return (
                <div className='flex flex-row gap-5 h-full text-sm'>
                        <div className='w-[70%] p-3 h-full overflow-y-auto'>
                                <p className='text-[19px] font-semibold my-2'>Welcome Back <span className='font-extrabold'>Buringiro Saad</span></p>
                                <p className='text-[rgba(67,67,67,0.43)] my-2'>Statistics of  Rwanda Coding Academy</p>
                                <div className="flex flex-row gap-3 h-[30vh]">
                                        <div className="w-[40%] h-full flex flex-col gap-3">
                                                <div className='bg-[rgba(2,97,29,0.08)] border  border-[rgba(2,7,29,0.26)] rounded-md h-[50%]'>89%</div>
                                                <div className='h-[50%] flex flex-row gap-3 '>
                                                        <div className='bg-[rgba(8,40,210,0.09)] border  border-[rgba(8,40,210,0.47)]  text-[rgba(8,40,210,0.47)] rounded-md '>234</div>
                                                        <div className='bg-[rgba(82,56,115,0.17)] border  border-[rgba(82,56,115,0.55)] text-[rgba(82,56,115,0.55)] rounded-md '>225</div>
                                                </div>
                                        </div>
                                        <div className="w-[60%] h-full">
                                                <div className='bg-[rgba(2,97,29,0.08)] border-2  border-[rgba(2,7,29,0.26)] rounded-md h-full'></div>
                                        </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                        <p className='text-[rgba(67,67,67,0.43)] my-2'>Information about Projects & Innovations</p>
                                        <p className='text-[#3C64CA] font-semibold text-[14px]'>View more</p>
                                </div>
                                <table className="w-full rounded-lg text-[rgba(67,67,67,0.71)]">
                                        <tr className="bg-[rgba(237,238,243)] text-[rgba(48,7,98,0.8)] py-10 rounded-md">
                                                <th className="p-2">#</th>
                                                <th className="p-2">Project Name</th>
                                                <th className="p-2">Number of Comments</th>
                                                <th className="p-2">View</th>
                                                <th className="p-2">Remove</th>
                                        </tr>
                                        {projects.map((project, index) => (
                                                <tr
                                                        key={index}
                                                        // className="my-5 border-[2px] border-white rounded-lg text-center "
                                                        className={index % 2 === 0 ? 'bg-[rgba(67,67,67,0.03)] my-20 text-center' : 'bg-[rgba(67,67,67,0.06)] text-center'}
                                                >
                                                        <td className="p-2">{project.id}</td>
                                                        <td className="p-2">{project.name}</td>
                                                        <td className="p-2">{project.comments.length}</td>
                                                        <td className="p-2 flex flex-row justify-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" className='cursor-pointer fill-blue-500'>
                                                                        <path d="M10.5 0C15.733 0 20.0867 3.88 21 9C20.0877 14.12 15.733 18 10.5 18C5.26698 18 0.913254 14.12 0 9C0.912284 3.88 5.26698 0 10.5 0ZM10.5 16C12.4793 15.9996 14.3999 15.3068 15.9474 14.0352C17.4948 12.7635 18.5775 10.9883 19.0182 9C18.5759 7.0133 17.4925 5.24 15.9452 3.97003C14.3979 2.70005 12.4782 2.00853 10.5 2.00853C8.5218 2.00853 6.60211 2.70005 5.05481 3.97003C3.5075 5.24 2.42412 7.0133 1.98179 9C2.4225 10.9883 3.50518 12.7635 5.05264 14.0352C6.6001 15.3068 8.52067 15.9996 10.5 16ZM10.5 13.5C9.34172 13.5 8.23087 13.0259 7.41184 12.182C6.59281 11.3381 6.13268 10.1935 6.13268 9C6.13268 7.80653 6.59281 6.66193 7.41184 5.81802C8.23087 4.97411 9.34172 4.5 10.5 4.5C11.6583 4.5 12.7691 4.97411 13.5882 5.81802C14.4072 6.66193 14.8673 7.80653 14.8673 9C14.8673 10.1935 14.4072 11.3381 13.5882 12.182C12.7691 13.0259 11.6583 13.5 10.5 13.5ZM10.5 11.5C11.1435 11.5 11.7606 11.2366 12.2156 10.7678C12.6707 10.2989 12.9263 9.66304 12.9263 9C12.9263 8.33696 12.6707 7.70107 12.2156 7.23223C11.7606 6.76339 11.1435 6.5 10.5 6.5C9.85651 6.5 9.23937 6.76339 8.78436 7.23223C8.32934 7.70107 8.07371 8.33696 8.07371 9C8.07371 9.66304 8.32934 10.2989 8.78436 10.7678C9.23937 11.2366 9.85651 11.5 10.5 11.5Z" fill="black" />
                                                                </svg>
                                                        </td>
                                                        <td className="p-2 flex flex-row justify-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                        <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.891 6.523L6.523 14.891C5.97638 14.5015 5.49849 14.0236 5.109 13.477L13.477 5.109C14.0236 5.49849 14.5015 5.97638 14.891 6.523Z" fill="#C80048" />
                                                                </svg>
                                                        </td>
                                                </tr>
                                        ))}
                                </table>
                        </div>
                        <div className='w-[30%]  h-[100%] overflow-y-auto bg-[#D9D9D975] border-2 border-[#43434305] p-2 rounded-md'>
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
                                                <input type="text" placeholder='Anouncement Heading' className=' px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full my-2' />
                                                <textarea placeholder='Anouncement Body' className="text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)] w-full px-3 py-2 my-2"></textarea>
                                                <input type="submit" value="Publish Anouncement" className='bg-[rgba(82,56,115)] rounded-md text-white px-5 py-2 w-full my-2' />
                                        </form>
                                </div>
                        </div>

                </div>
        )
}

export default AdminDashboard