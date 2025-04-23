import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api';
import { Link } from 'react-router-dom';

const FirmCollections = () => {
    const [firmData, setFirmData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [activeCategory, setActiveCategory]= useState('all');

    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newFirmData = await response.json();
            setFirmData(newFirmData.vendors);
        } catch (error) {
            alert("firm data not fetched");
            console.error("firm data not fetched", error)
        }
    }

    useEffect(() => {
        firmDataHandler();
    }, [])

    const filterHandler = (region) =>{
        setSelectedRegion(region);
        //setActiveCategory(category);
    }

    return (

        <div>
            <h4 className='heading'>Restaurants with online food delivery in Hyderabad</h4>
            <div className='filterButtons'>
                <button onClick={()=>filterHandler("All")} className={activeCategory==='all'? "activeButton" : ''} >All</button>
                <button onClick={()=>filterHandler("south-Indian")} className={activeCategory==='south-Indian'? "activeButton" : ''} >South-Indian</button>
                <button onClick={()=>filterHandler("north-Indian")} className={activeCategory==='north-Indian'? "activeButton" : ''} >North-Indian</button>
                <button onClick={()=>filterHandler("chinese")} className={activeCategory==='chinese'? "activeButton" : ''} >Chinese</button>
                <button onClick={()=>filterHandler("bakery")} className={activeCategory==='bakery'? "activeButton" : ''} >Bakery</button>
            </div>

            <div className='firmSection'>
                {firmData.map((eachFirm) => (
                    eachFirm.firm.map((item) => {
                        if (selectedRegion==='All' || item.region.includes(selectedRegion) ){

                        return (
                            <Link to={`product/${item._id}/${item.firmName}`} className='link'>
                                <div className='firmGroup'>
                                    <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                                    <div className='firmOffer'>
                                        {item.offer}
                                    </div>
                                </div>
                                <div className='firmDetails'>
                                    <strong>{item.firmName}</strong>
                                    <br />
                                    <div className='firmArea'>{item.region}</div>
                                    <div className='firmArea'>{item.area}</div>
                                </div>

                            </Link>

                        )
                    }

                    })
                
                ))}
            </div>
        </div>

    )
}

export default FirmCollections



/*  <div className='firmDetails'>
                                <strong>{item.firmName}</strong>
                                <br/> 
                                <div className='firmArea'>{item.region}</div>
                                <div className='firmArea'>{item.area}</div>
                            </div>
                            
                            
                            */