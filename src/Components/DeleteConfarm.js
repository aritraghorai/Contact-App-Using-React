import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function DeleteConfarm(props) {
    // console.log(props);
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location);
    const yes = () => {
        props.delete(location.state.id)
        navigate("/")
    }
    return (
        <div>
            <div className="container flex flex-col justify-center content-center">
                <div className="text block text-center text-2xl">
                    Are You Really Want to Delete?
                </div>
                <div className="buttons block text-center" >
                    <button type="reset" onClick={() => { yes() }} className='mt-3 text-xl border-2 text-center  border-gray-600 bg-red-600  rounded-md text-white hover:bg-white hover:text-sky-500 mx-3 px-4 py-2'>Yes</button>
                    <button type="reset" onClick={() => { navigate("/") }} className='mt-3 text-xl border-2 text-center  border-gray-600 bg-green-500 p-2 rounded-md text-white hover:bg-white hover:text-sky-500 px-4 py-2'>No</button>
                </div>
            </div>
        </div>
    )
}
