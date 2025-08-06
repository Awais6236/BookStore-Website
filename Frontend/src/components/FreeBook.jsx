import React from 'react'
import axios from 'axios';
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';

function FreeBook() {
    const [book, setBook] = useState([])
  useEffect(()=> {
    const getBook = async ()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        setBook(res.data.filter((data) => data.category === "Free"))
      } catch (error) {
        console.log("Error", error)
      }
    }
    getBook();
  })

var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }
    ]
};

return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20'>
            <div>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates, qui iure sed fuga soluta officia dolores dolore modi numquam consequatur earum nesciunt at sint.</p>
            </div>

            <div className='relative'>
                <Slider {...settings}>
                    {book.map((item) =>
                        <Cards item={item} key={item.id} />
                    )}
                </Slider>
            </div>
        </div>
    </>
)
}

export default FreeBook
