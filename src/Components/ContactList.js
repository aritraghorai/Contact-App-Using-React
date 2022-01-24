import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'


export default function ContactList(props) {
    const inputEl = useRef("")
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }
    const getSearchTerm = (e) => {
        // console.log(inputEl.current.value);
        props.searchHandler(inputEl.current.value);
    }
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler} />
        )
    })
    return (
        <div>

            <h1 className='text-3xl text-bold m-3 p-3  font-bold'>Contact List
                <Link to="add" >
                    <button className='relative float-right text-xl font-bold border-2  border-gray-700 bg-sky-500 p-2 rounded-md text-white hover:bg-white hover:text-sky-500'>Add Contact</button>
                </Link>
            </h1>
            <div className="search m-3">
                <input ref={inputEl} type="text" placeholder='Search' onChange={getSearchTerm} name="" id="" className='w-full border-4 border-sky-400 p-2 rounded-md  hover:bg-white hover:border-blue-400 text-2xl ' />
            </div>

            <div className="  border-t-2 ">{renderContactList.length === 0 ? "No Contact Available!!!" : renderContactList}</div>
        </div>
    )
}
