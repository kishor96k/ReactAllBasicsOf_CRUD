import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {

    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })
    const navigate = useNavigate();


    const handleSubmit = ((event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/one', values).then((response) => {
            // console.log(response.data, 'post response');
            alert(response.data);
            navigate('/');
        }).catch((err) => {
            console.log(err, 'post err');
        })
    })

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2>Add a User</h2>
                <div className='d-flex justify-content-end mb-3'>
                    <Link to='/' className='btn btn-primary' >Back </Link>
                </div>
                <form className="" onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <input type="text" name="name" id="name" className='form-control' placeholder='enter name'
                            onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <input type="email" name="email" id="email" className='form-control' placeholder='enter email'
                            onChange={e => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <input type="text" name="username" id="username" className='form-control' placeholder='enter username'
                            onChange={e => setValues({ ...values, username: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <input type="number" name="phone" id="phone" className='form-control' placeholder='enter phone'
                            onChange={e => setValues({ ...values, phone: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <input type="text" name="website" id="website" className='form-control' placeholder='enter website'
                            onChange={e => setValues({ ...values, website: e.target.value })} />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success me-auto' type='submit'>Add</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Create;