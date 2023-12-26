import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/one/${id}`)
            .then((response) => {
                setValues(response.data);
            })
            .catch((err) => {
                console.log(err, 'error of red');
            });
    }, [id]);

    const handleEdit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/one/${id}`, values)
            .then((response) => {
                console.log(response.data, 'response on red');
                alert("record updated")
            })
            .catch((err) => {
                console.log(err, 'error of red');
            });
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2>Update a User</h2>
                <div className='d-flex justify-content-end mb-3'>
                    <Link to='/' className='btn btn-primary'>Back</Link>
                </div>
                <form className="" onSubmit={handleEdit}>
                    <div className='mb-2'>
                        <input
                            value={values.name}
                            type="text"
                            name="name"
                            id="name"
                            className='form-control'
                            placeholder='enter name'
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, name: e.target.value }))}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            value={values.username}
                            type="text"
                            name="username"
                            id="username"
                            className='form-control'
                            placeholder='enter username'
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, username: e.target.value }))}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            value={values.email}
                            type="email"
                            name="email"
                            id="email"
                            className='form-control'
                            placeholder='enter email'
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, email: e.target.value }))}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            value={values.phone}
                            type="number"
                            name="phone"
                            id="phone"
                            className='form-control'
                            placeholder='enter phone'
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, phone: e.target.value }))}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            value={values.website}
                            type="text"
                            name="website"
                            id="website"
                            className='form-control'
                            placeholder='enter website'
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, website: e.target.value }))}
                        />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success me-auto' type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
