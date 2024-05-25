import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [error, setError] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(title.length == 0 || description.length == 0){
            setError(true)
        }
        else{
            dispatch(addUser({id:users[users.length - 1].id + 1 , title, description}));
            navigate('/') 
        }
        
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-secondary text-white p-5">
            <h3>Add New Task</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Title</label>
                    <input type="text" name='Title' className='form-control' placeholder='Enter Title' onChange={ element => setTitle(element.target.value)}/>
                </div>
                {error && title.length <= 0 ?
                <label className='validation'>Title Can't be Empty</label>:""}
                <div>
                <label htmlFor="name">Description</label>
                    <input type="text" name='Description' className='form-control' placeholder='Enter Description' onChange={ element => setDescription(element.target.value)}/>
                </div>
                {error && description.length <= 0 ?
                <label className='validation'>Title Can't be Empty</label>:""}
                <br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create