import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        document.getElementById("my_modal_3").close()
    }
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className='border-[2px] p-6 shadow-md rounded-md'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className='flex flex-col mt-4 space-y-2'>
                            <span>Name</span>
                            <input className='w-80 px-3 py-1 border rounded-md outline-none' type="text" placeholder='Enter your name' {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='flex flex-col mt-4 space-y-2'>
                            <span>Email</span>
                            <input className='w-80 px-3 py-1 border rounded-md outline-none' type="email" placeholder='Enter your email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='flex flex-col mt-4 space-y-2'>
                            <span>Message</span>
                            <textarea className='w-80 h-25 px-3 py-1 border rounded-md outline-none' type="text" placeholder='Enter your Message' {...register("text", { required: true })} />
                            {errors.Message && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className='flex mt-4'>
                            <button type='submit' className='bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact
