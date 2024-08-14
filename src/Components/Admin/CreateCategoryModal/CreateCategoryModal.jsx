import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createCategory } from '../../../service/category';

const CategoryModal = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate(0);

    const handleCreate = async () => {
        await createCategory(name, description)
        navigate(0);
    }


    return (
        <div className='flex flex-col'>
            <button className="btn self-end hover:bg-gray-200" onClick={() => document.getElementById('create-category').showModal()}>Add new category</button>
            <dialog id={'create-category'} className="modal">
                <div className="modal-box h-fit">
                    <p className='mb-4'>Create your category here.</p>
                    <div className='flex flex-col gap-4'>
                        <label>Name:</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your product name" className="input input-bordered w-full max-w-xs" />
                        <label>Description:</label>
                        <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <div className='flex gap-4'>
                                <button onClick={handleCreate} className="btn mr-4 border border-primary text-primary hover:bg-primary hover:bg-opacity-10">Yes</button>
                                <button className="btn border border-red-500 text-red-500 hover:bg-red-500 hover:bg-opacity-10">No</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    )
}

export default CategoryModal