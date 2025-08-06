import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/login", userInfo).then((res) => {
            console.log(res.data)
            if (res.data) {
                toast.success('Login successful');
                document.getElementById("my_modal_3").close()
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user))
        }).catch((err) => {
            toast.error("Error accured", err.response?.data?.message);
        });
        document.getElementById("my_modal_3").close()
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
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
                            <button type='submit' className='bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered?
                                <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login