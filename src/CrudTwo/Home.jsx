import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [coloumn, setColoumn] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/two`).then((response) => {
            setColoumn(Object.keys(response.data[0]))
            setRecords(response.data)
        })
    })

    const deleteRecord = (id) => {
        axios.delete(`http://localhost:3001/two/` + id)
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
        <div className='container mt-5'>
            <div className='text-end'><Link to='/create' className='btn btn-info mb-2' >Create</Link></div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        {coloumn.map((index, values) => (
                            <th key={values}>{index}</th>
                        ))}
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {records.map((items, index) => (
                        <tr key={index}>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.author}</td>
                            <td>{items.email}</td>
                            <td>
                                <Link to={`/edit/${items.id}`} className='btn btn-success me-2'>Edit</Link>
                                <button onClick={e => deleteRecord(items.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Home;