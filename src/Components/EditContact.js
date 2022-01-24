
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function EditContact(props) {
    const location = useLocation()
    const { id, name, email } = location.state.contact
    const [contact, setContact] = useState({ id: id, name: name, email: email })
    let navigae = useNavigate()
    const update = (e) => {
        e.preventDefault()
        if (contact.name === "" || contact.email === "") {
            alert("All field Has to put")
            return;
        }
        // console.log(location);
        // console.log(this.props);
        // console.log(this.state);
        props.update(contact)
        setContact({ id: id, name: "", email: "" })
        navigae("/")
    }
    return (
        <>
            <div className="m-5 ">
                <h1 className="text-3xl font-extrabold  ">Edit Contact</h1>
                <form action="" onSubmit={update}>
                    <div className="mt-3">
                        <label htmlFor="name" className="text-3xl block font-bold mb-2 ">Name</label>
                        <input type="text" id='name' value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600  text-2xl   rounded  border-black border-2 shadow outline-1 w-full focus:outline-none focus:ring  " placeholder="Enter Your Name" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email" className="text-3xl block mb-2 font-bold ">Email</label>
                        <input type="email" id='email' value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="px-3 py-3 placeholder-blueGray-300 w-full text-blueGray-600  text-2xl   rounded  border-black border-2 shadow outline-1 focus:outline-none focus:ring " placeholder="Enter Your Email" />
                    </div>
                    <button className="text-xl w-full mt-5 bg-sky-500 hover:bg-transparent text-white font-semibold hover:text-black py-3 px-8 border border-blue-500 hover:border-black rounded hover:bottom-5">Update</button>
                </form>
            </div>
        </>
    )
}
