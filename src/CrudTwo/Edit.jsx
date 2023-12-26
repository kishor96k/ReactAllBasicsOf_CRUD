import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams ,Link, useNavigate} from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3001/two/` + id).then((response) => {
            setData(response.data)
        }).catch((err) => {
            console.log(err);
        })
    },[id])

    const updateData = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/two/` + id,data).then((response)=>{
            alert("record updated");
            navigate('/');
        }).catch((err)=>{
            console.log(err);
        })

    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-light p-5 border'>
                <form onSubmit={updateData}>
                    <div className='mb-2'>
                        <input value={data.title} type="text" name="title" id="title" className='form-control' placeholder='enter title'
                            onChange={e => { setData({ ...data, title: e.target.value }) }} />
                    </div>
                    <div className='mb-2'>
                        <input value={data.author} type="text" name="author" id="author" className='form-control' placeholder='enter author'
                            onChange={e => setData({ ...data, author: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <input value={data.email} type="email" name="email" id="email" className='form-control' placeholder='enter email'
                            onChange={e => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div className=''>
                        <Link to='/' className='btn btn-info me-2' >back</Link>
                        <button className='btn btn-primary' type='submit'>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;