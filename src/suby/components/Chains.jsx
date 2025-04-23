import React from 'react'
import { API_URL } from '../../api'
import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {BounceLoader } from "react-spinners";

const Chains = () => {
    const [vendorData, setVendorData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0)
    const [loading, setLoading] = useState(true)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const vendorFirmHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)
            const newData = await response.json();
            setVendorData(newData);
            console.log(newData);
            setLoading(false)
        } catch (error) {
            alert("Failed to fetch data");
            console.error("Failed to fetch data", error);
            setLoading(true)
        }
    }

    useEffect(() => {
        vendorFirmHandler()
    }, [])


    const onScrollImage = (direction) => {
        const gallery = document.getElementById('chainGallery');
        const scrollAmount = 500;

        if (direction === 'left') {
            gallery.scrollTo({ left: gallery.scrollLeft - scrollAmount, behavior: 'smooth' })
        } else if (direction === 'right') {
            gallery.scrollTo({ left: gallery.scrollLeft + scrollAmount, behavior: 'smooth' })
        }
    }


    return (
        <>
            <div className='loaderSection'>
                {loading && <>
                    <div className='Loader'>
                            Your Food is loading
                            <BounceLoader color="blue"
                                            loading={loading}
                                            size={70}
                                            aria-label="Loading Spinner"
                                            data-testid="loader" /> 
                    </div>
                </>}
            </div>
            <div className='chainContainer'>
                <h3>Top restaurant chains in Hyderabad</h3>
                <div>
                    <button className='btn_left'  onClick={() => onScrollImage('left')}><FaArrowLeft className='left' /></button>
                    <button className='btn_right' onClick={() => onScrollImage('right')}><FaArrowRight className='right' /></button>
                </div>
            </div>
            <div className="chainSection" id='chainGallery' onScroll={(e) => setScrollPosition(e.target.scrollf)}>


                {vendorData.vendors && vendorData.vendors.map((vendor) => {
                    return (
                        <>
                            <div className="vendorBox">
                                {vendor.firm.map((item) => {
                                    return (
                                        <>
                                            {/*<Link to={`/products/${item._id}/${item.firmName}`} className="link" key={item._id}>*/}
                                            <div className="firmImage">
                                                <img src={`${API_URL}/uploads/${item.image}`} />
                                            </div>

                                        </>
                                    )
                                })}
                            </div>
                        </>


                    )
                })}
            </div>
        </>
    )
}

export default Chains
