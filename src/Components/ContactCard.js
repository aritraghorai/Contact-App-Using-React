import React from 'react'
import profile from "../images/avtar.png"
import { Link } from 'react-router-dom'

export default function ContactCard(props) {
    const { name, email, id } = props.contact
    return (
        <div className="item">
            <div className="content border-b-2">
                <div className='grid grid-flow-col  grid-cols-12 p-2'>
                    <div className='img grid content-center'>
                        <img src={profile} alt="" className="w-12" />

                    </div>
                    <div className="details grid content-center ">
                        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                            <div className="font-bold text-xl cursor-pointer">{name}</div>
                            <div className='text-xl cursor-pointer'>{email}</div>
                        </Link>
                    </div>
                    <div className="icons grid grid-flow-row justify-end content-center pr-2">

                        {/* <span onClick={() => { props.clickHandler(id) }} className='material-icons  m-2 text-red-600 cursor-pointer'>delete</span>
                            <span onClick={() => { props.clickHandler(id) }} className='material-icons  m-2 text-red-600 cursor-pointer'>mode_edit</span> */}
                        <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
                            <div className="edit w-8   cursor-pointer">
                                <img alt=''
                                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-edit-interface-kiranshastry-solid-kiranshastry.png" />
                            </div>
                        </Link>
                        <Link to={`/delete/${id}`} state={{ id: id }}>
                            <div className="delete w-8   cursor-pointer">
                                <img alt=''
                                    src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" />
                            </div>
                        </Link>

                    </div>
                </div>


                {/* <Link to={`/delete/${id}`} state={{ id: id }}>
                    <span className='material-icons flex justify-end m-2 text-red-600 cursor-pointer'>delete</span>
                </Link> */}

            </div>
        </div >
    )
}
