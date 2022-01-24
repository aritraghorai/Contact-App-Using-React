import React from 'react'
import user from "../images/ContactCardImage.png"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Contact_Card_Detail(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const { name, email } = location.state.contact
    // console.log(location);
    return (
        <div className="container grid justify-center content-center ">
            <div className="container ">

                <div className=" bg-slate-200 border-4 border-gray-100 overflow-hidden rounded-sm w-64 mt-20">
                    <div className="img w-full border-b-2 border-gray-100 b-2 pb-3">
                        <img src={user} alt="" />
                    </div>
                    <div className="details p-2">
                        <div className='name block text-left text-2xl text-bold '>{name}</div>
                        <div className="email name block text-left text-2xl text-bold">{email}</div>
                    </div>

                </div>
            </div >
            <button type="submit" onClick={() => { navigate('/') }} className=' block mx-auto mt-3 text-xl border-2 text-center  border-gray-600 bg-sky-500 p-2 rounded-md text-white hover:bg-white hover:text-sky-500'>Back To Contact</button>
        </div>


    )
}
