import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './UserReducer';

const Home = () => {
    const users = useSelector((state) => state.users);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerpage = 5;
    const lastIndex = currentPage * recordsPerpage;
    const firstIndex = lastIndex - recordsPerpage;
    const records = users.slice(firstIndex, lastIndex);
    const npage = Math.ceil(users.length/recordsPerpage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    // -------
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(deleteUser({id: id}))
    }
    
  return (
    <div>
        <h2 className='paginationbottom pt-3'>To Do Web</h2>
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
                {records.map((user, index) =>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.description}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        <div className='mt-4 paginationbottom'>
            <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a href="#" className='page-link'
                        onClick={prePage}>Prev</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#" className='page-link'
                                onClick={() => changeCPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <a href="#" className='page-link'
                        onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
  function prePage(){
    if(currentPage !== 1) {
        setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id){
    setCurrentPage(id);
  }
  function nextPage(id){
    if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
    }
  }
}

export default Home