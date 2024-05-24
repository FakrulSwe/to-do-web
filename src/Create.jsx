import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [title,setTitle] = useState('')
    const [description,setdescription] = useState('')
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addUser({id:users[users.length - 1].id + 1 , title, description}));
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-secondary text-white p-5">
            <h3>Add New Client</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Title</label>
                    <input type="text" name='Title' className='form-control' placeholder='Enter Title' onChange={ element => setTitle(element.target.value)}/>
                </div>
                <div>
                <label htmlFor="name">Description</label>
                    <input type="text" name='Description' className='form-control' placeholder='Enter Description' onChange={ element => setdescription(element.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create