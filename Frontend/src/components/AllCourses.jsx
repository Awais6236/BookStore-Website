import React from 'react'
import axios from 'axios'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function AllCourses() {

  const [book, setBook] = useState([])
  useEffect(()=> {
    const getBook = async ()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log("Error", error)
      }
    }
    getBook();
  })

  return (
    <>
      <div className='max-w-screen-2xl z-50 container mx-auto md:px-20 px-4'>
        <div className='mt-25 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
          <p className='mt-12 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt quas, fugiat porro officia dolore iusto expedita. Quisquam quis molestiae nam in provident veniam cupiditate porro reiciendis repudiandae rem, iusto aut doloremque optio perferendis explicabo sint et laboriosam quam nisi magni repellendus eius tempora earum! Fuga reiciendis laudantium cumque recusandae.</p>
          <Link to='/'>
            <button className='bg-pink-500 px-2 cursor-pointer py-1 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AllCourses
