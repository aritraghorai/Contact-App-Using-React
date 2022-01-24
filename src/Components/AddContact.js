
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddContact(props) {
    const [contact, setContact] = useState({ name: "", email: "" })
    let navigae = useNavigate()
    const add = (e) => {
        e.preventDefault()
        if (contact.name === "" || contact.email === "") {
            alert("All field Has to put")
            return;
        }
        // console.log(this.props);
        // console.log(this.state);
        props.addContactHandler(contact)
        setContact({ name: "", email: "" })
        navigae("/")
    }
    return (
        <>
            <div className="m-5">
                <h1 className="text-3xl font-extrabold  ">Add Contact</h1>
                <form action="" onSubmit={add}>
                    <div className="mt-3">
                        <label htmlFor="name" className="text-3xl block font-bold mb-2 ">Name</label>
                        <input type="text" id='name' value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="px-3 py-3 w-full placeholder-blueGray-300 text-blueGray-600  text-2xl   rounded  border-black border-2 shadow outline-1 focus:outline-none focus:ring  " placeholder="Enter Your Name" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="email" className="text-3xl block mb-2 font-bold ">Email</label>
                        <input type="email" id='email' value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="px-3 py-3  placeholder-blueGray-300 text-blueGray-600  w-full text-2xl   rounded  border-black border-2 shadow outline-1 focus:outline-none focus:ring  " placeholder="Enter Your Email" />
                    </div>
                    <button className="text-xl w-full  mt-5 bg-sky-500 hover:bg-transparent text-white font-semibold hover:text-black py-3 px-8 border border-blue-500 hover:border-black rounded hover:bottom-5">Add</button>
                </form>
            </div>
        </>
    )
}
