import React from 'react'
import "./Body.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { MdOutlineCheckCircle } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import image from "../../assets/image.png"
import { CiCircleCheck } from "react-icons/ci";
import Tabcard from '../Tabcard/Tabcard';
import Relatedcard from '../Relatedcard/Relatedcard';

const Body = () => {
    return (
        <>
            <Header />
            <div className='body-container'>
                <div className='content'>

                    <div className="heading">
                        <h1>Best Website builders in the US</h1>
                    </div>
                    <div className='info-section'>
                        <div className='info'>
                            <span>
                                <MdOutlineCheckCircle className='icon' />{" "}
                                Last Updated - Date
                            </span>
                            <span>
                                <IoIosInformationCircleOutline className='icon' />{" "}
                                Advertising Disclosure
                            </span>
                        </div>
                        <div className='filter'>
                            <select name="filter" >
                                <option value="Top Relevant">Top Relevant</option>
                                <option value="Recent">Recent</option>
                            </select>
                        </div>
                    </div>
                    <div className='tabs'>
                        <ul className='tab-list'>
                            <li>Tools</li>
                            <li>AWS Builder</li>
                            <li>Start Build</li>
                            <li>Build Supplies</li>
                            <li>Tooling</li>
                            <li>BlueHosting</li>
                        </ul>
                    </div>
                    {/* //this Section can be optimised to display data using location and Navigate Browser API's */}
                    <div class='location'>
                        <div>Home <span class='grt'>&gt;</span> Hosting for all <span class='grt'>&gt;</span> Hosting <span class='grt'>&gt;</span> Hosting6 <span class='grt'>&gt;</span> Hosting5</div>
                    </div>
                    <Tabcard />
                    <div className='card'>
                        <span className='count'>4</span>
                        <img src={image} alt=" " />
                        <div className='content'>
                            <div className='heading'><b>CDK Resposive Builder:</b><span>An extensive library of widgets and apps, and detailed step-by-step guides</span></div>
                            <span className="mrpoff">26% Off</span>
                            <div className='features'>
                                <b>Main highlights</b>
                                <div className='features-container'>
                                    <div className='feature001'><span className='number'>9.9</span><span>Building Responsive</span></div>
                                    <div className='feature001'><span className='number'>8.9</span><span>Cool</span></div>
                                    <div className='feature001'><span className='number'>8.9</span><span>Docs</span></div>
                                </div>
                            </div>
                            <div className='speciality'>
                                Why we love it
                                <span><CiCircleCheck className='check' /> Documentation</span>
                                <span><CiCircleCheck className='check' /> Easy Use</span>
                                <span><CiCircleCheck className='check' /> Out Of Box</span>
                            </div>
                            <a>Show more <IoIosArrowDown /></a>
                        </div>
                        <div className='rating'>
                            <div className="number">9.1</div>
                            <div className="category">Exceptional</div>
                            <div className='star'><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /></div>
                        </div>
                        <button className='btn'>View</button>
                    </div>
                    <div className='related-card'>
                        <div className='heading'>Related deals you might like for</div>
                        <Relatedcard />
                    </div>
                    <div className='signup'>
                        <span>Sign up and get exclusive special deals</span>
                        <div className='signup-input'>
                            <input type="text" />
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Body
