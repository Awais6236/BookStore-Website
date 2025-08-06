import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div>
                <div className="hover:scale-105 duration-200 my-4 mx-auto md:px-7 px-4 mt-10 card bg-base-100 w-95 shadow-sm">
                    <figure>
                        <img src={item.image} alt="Item image" />
                    </figure>
                    <div className="card-body p-6">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline cursor-pointer">${item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-500 duration-200 cursor-pointer">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
