import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/one').then((result) => {
            setData(result.data);
            // console.log(result, "result of list");
        }).catch((error) => {
            console.log(error, "error occurs");
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/one/` + id)
            .then((response) => {
                const confirmed = window.confirm("Do you want to delete the record?");
                if (confirmed) {
                    alert("Record deleted");
                }
            })
            .catch((err) => {
                console.log("Error occurred:", err);
            });
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List Of Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4' >
                <div className='d-flex justify-content-end mb-3'>
                    <Link to='/create' className='btn btn-primary' >Add +</Link>
                </div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Web</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((values, index) => (
                            <tr key={index}>
                                <td>{values.id}</td>
                                <td>{values.name}</td>
                                <td>{values.username}</td>
                                <td>{values.email}</td>
                                <td>{values.phone}</td>
                                <td>{values.website}</td>
                                <td>
                                    <Link to={`/read/${values.id}`} className='btn btn-info btn-sm me-2'>Read</Link>
                                    <Link to={`/update/${values.id}`} className='btn btn-secondary btn-sm me-2'>Edit</Link>
                                    <button onClick={e => handleDelete(values.id)} className='btn btn-danger btn-sm'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Home;