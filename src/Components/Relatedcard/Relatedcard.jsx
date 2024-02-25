import React from 'react'
import "./Relatedcard.scss"
import cardimg from "../../assets/cardimg.png"
import { relatedCard } from '../../data'

const Relatedcard = () => {
    return (
        <>
            <div className='relatedcards'>
                {relatedCard.map((item) => (
                    <div className='relatedcard' key={item.id}>
                        <img src={cardimg} alt=" " />
                        <div className='tag'>
                            <span>{item.off}% Off</span>
                            <span>Limited time</span>
                        </div>
                        <div className='card-heading'>{item.title}</div>
                        <div className='card-desc'>{item.desc}</div>
                        <div className='price'>${item.price}<span>${item.mrp}</span><span className='off'>({item.off}% Off)</span></div>
                        <button>View Deal</button>
                    </div>

                ))}



            </div>
        </>
    )
}

export default Relatedcard
