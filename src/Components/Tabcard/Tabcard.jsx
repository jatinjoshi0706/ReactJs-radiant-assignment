import React from 'react'
import details from "../../data"
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import image from "../../assets/image.png"
const Tabcard = () => {
    return (
        <>
            {details.map((item) => (
                <div className='card' key={item.id}>
                    {item.specialRating ? <div className='special'>
                        <img src={item.src} alt="" />
                        {item.catagory}
                    </div> : " "}

                    <span className='count'>{item.id}</span>
                    <img src={image} alt=" " />
                    <div className='content'>
                        <div className='heading'><b>{item.title}</b><span>{item.desc}</span></div>
                        <div className='features'>
                            <b>Main highlights</b>
                            <p>{item.features}</p>
                        </div>
                        <a>Show more <IoIosArrowDown /></a>
                    </div>
                    <div className='rating'>
                        <div className="number">{item.rating}</div>
                        <div className="category">Exceptional</div>
                        <div className='star'><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /></div>
                    </div>
                    <button className='card-view'>View</button>
                </div>
                
            ))}
        </>
    )
}

export default Tabcard
