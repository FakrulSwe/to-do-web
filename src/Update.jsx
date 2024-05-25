import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';


const Update = () => { 
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id ==  id);
    const { title, description} = existingUser[0];
    const [Title,setTitle] = useState(title)
    const [Description,setDescription] = useState(description)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            title: Title,
            description: Description
        }))
        navigate('/');
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-secondary text-white p-5">
            <h3>Update Client Details</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Title</label>
                    <input type="text" name='Title' className='form-control' placeholder='Enter Title' value={Title} 
                    onChange={element => setTitle(element.target.value)}/>
                </div>
                <div>
                <label htmlFor="name">Description</label>
                    <input type="text" name='Description' className='form-control' placeholder='Enter Description' value={Description}
                    onChange={element => setDescription(element.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update