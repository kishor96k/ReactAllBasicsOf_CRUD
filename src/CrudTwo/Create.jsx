import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        title: '',
        author: '',
        email: ''
    })

    const submitData = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/two` , input).then((response) => {
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-light p-5 border'>
                <form onSubmit={submitData}>
                    <div className='mb-2'>
                        <input type="text" name="title" id="title" className='form-control' placeholder='enter title'
                            onChange={e => { setInput({ ...input, title: e.target.value }) }} />
                    </div>
                    <div className='mb-2'>
                        <input type="text" name="author" id="author" className='form-control' placeholder='enter author'
                            onChange={e => setInput({ ...input, author: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <input type="email" name="email" id="email" className='form-control' placeholder='enter email'
                            onChange={e => setInput({ ...input, email: e.target.value })} />
                    </div>
                    <div className=''>
                        <Link to='/' className='btn btn-info me-2' >back</Link>
                        <button className='btn btn-primary' type='submit'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;