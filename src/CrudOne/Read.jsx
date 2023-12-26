import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(('http://localhost:3001/one/' + id)).then((response) => {
            setData(response.data);
            console.log(response.data, 'response on red');
        }).catch((err) => {
            console.log(err, 'error of red');
        })
    }, [])

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 rounded pb-5'>
                <div className='mb-2'>
                    Name <strong>{data.name}</strong>
                </div>
                <div className='mb-2'>
                    UserName <strong>{data.username}</strong>
                </div>
                <div className='mb-2'>
                    Email <strong>{data.email}</strong>
                </div>
                <div className='mb-2'>
                    Phone <strong>{data.phone}</strong>
                </div>
                <div className='mb-2'>
                    Website <strong>{data.website}</strong>
                </div>
                <Link to={`/update/${data.id}`} className='btn btn-danger me-2'>Update</Link>
                <Link to='/' className='btn btn-secondary'>back to home</Link>

            </div>
        </div >

    );
};

export default Read;