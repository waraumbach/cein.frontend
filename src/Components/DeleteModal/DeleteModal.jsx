import React from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { deleteProduct } from '../../service/product';
import { useNavigate } from 'react-router-dom';

const DeleteModal = ({ id, name }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteProduct(id)
        navigate(0)
    }

    return (
        <div>
            <button className="btn border-red-50" onClick={() => document.getElementById(id).showModal()}><HiOutlineXMark className='text-red-500' /></button>
            <dialog id={id} className="modal">
                <div className="modal-box h-fit">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">Are you sure to delete this product?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleDelete} className="btn mr-4 border border-primary text-primary hover:bg-primary hover:bg-opacity-10">Yes</button>
                            <button className="btn border border-red-500 text-red-500 hover:bg-red-500 hover:bg-opacity-10">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    )
}

export default DeleteModal