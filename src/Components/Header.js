import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    let navigate = useNavigate()
    return (
        <div onClick={() => { navigate("/") }} className="text-center cursor-pointer  text-3xl border-b-2 border-slate-200 py-2 font-medium">
            Contact Manager
        </div>
    )
}
