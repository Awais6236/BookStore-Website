import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

function Signup() {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const [authUser, setAuthUser] = useAuth();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/signup", userInfo).then((res) => {
            console.log(res.data)
            if (res.data) {
                toast.success('Signup successful');
                setAuthUser(res.data.user);
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user))
            navigate(from, {replace: true})

        }).catch((err) => {
            console.log("Error", err)
            toast.error("Error: " + err.response.data.message);
        });
        document.getElementById("my_modal_3").close()
    }
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className='border-[2px] p-6 shadow-md rounded-md'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">SignUp</h3>
                        <div className='flex flex-col mt-4 space-y-2'>
                            <span>Name</span>
                            <input className='w-80 px-3 py-1 border rounded-md outline-none' type="text" placeholder='Enter your name' {...register("fullname", { required: true })} />
                            {errors.fullname && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='flex flex-col mt-4 space-y-2'>
                            <span>Email</span>
                            <input className='w-80 px-3 py-1 border rounded-md outline-none' type="email" placeholder='Enter your email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='flex flex-col mt-4 space-y-2'>
                            <span>Password</span>
                            <input className='w-80 px-3 py-1 border rounded-md outline-none' type="password" placeholder='Enter your password' {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type='submit' className='bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
                            <p>Have an account?
                                <button className='underline text-blue-500 cursor-pointer'
                                    onClick={() => { document.getElementById("my_modal_3").showModal() }}>Login</button>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
