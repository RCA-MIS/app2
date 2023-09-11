"use client"
import Link from 'next/link'
import React from 'react'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { loginService } from '@/actions/auth.action'
import { useRouter } from 'next/navigation'
const LoginForm = () => {
        const schema = yup.object().shape({
                email: yup.string().email("Please provide a valid email address").required("Please provide an email address"),
                password: yup.string().required("Please enter password"),
        })
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(schema)
        })
        const router = useRouter()
        const onSubmit = async (data: Login) => {
                try {
                        const loggedInUser = await loginService(data);
                        if (!(loggedInUser instanceof Error)) {
                                toast.success(loggedInUser.message)
                                if (loggedInUser.user.role === 'admin') {
                                        router.push("/staff")
                                } else if (loggedInUser.user.role === "standard") {
                                        router.push("/student")
                                }
                        }
                } catch (err) {
                        console.log(err)
                        toast.error(err as string)
                }
        }
        return (
                <form onSubmit={handleSubmit(onSubmit)} >
                        <input type="text" className='text-black rounded-md border border-gray-400 border-opacity-9 bg-[#4343430D] w-full px-[1.94rem] py-[1rem] outline-none focus:outline-none my-2.5 placeholder:text-black' placeholder='Admin Email'  {...register("email")} />
                        <p className="text-red-500">{errors.email?.message}</p>
                        <input type="password" className='text-black rounded-md border border-gray-400 border-opacity-9 bg-[#4343430D] w-full px-[1.94rem] py-[1rem]  outline-none focus:outline-none my-2.5  placeholder:text-black' placeholder='Password' {...register("password")} />
                        <p className="text-red-500">{errors.password?.message}</p>
                        <div className="my-2.5 flex flex-row justify-between">
                                <div className="flex flex-row gap-5">
                                        <input type="checkbox" name="remember" id="remember" className='w-[1.56rem] h-[1.56rem] rounded-[0.5rem] border-[#D9D9D9]' />
                                        <p className='text-[#4343436D] text-sm font-medium'>Remember Me</p>
                                </div>
                                <Link href={"/forgot-password"} className='font-medium text-[#523873] text-sm'>Forgot my password</Link>
                        </div>
                        <input type="submit" value="Login" className='cursor-pointer rounded-full border border-[#2955C56E] border-opacity-43 bg-[#523873] text-white px-[3.5rem]  py-3 my-2.5 text-[1rem] w-[60%]' />
                </form>
        )
}

export default LoginForm