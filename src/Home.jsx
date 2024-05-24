import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const users = useSelector((state) => state.users);
    
  return (
    <div>
        <h2>Crud App with Json Server</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) =>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.description}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <Link className='btn btn-sm btn-danger ms-2'>Delete</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home