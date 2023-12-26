import React from 'react';
import { Button, Table } from 'react-bootstrap';
import empl from './Employee';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();

    const Delete = (id) => {
        var index = empl.map((event) => {
            return event.id
        }).indexOf(id);
        empl.splice(index, 1);
        navigate('/');
    }

    const Edit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }

    return (
        <React.Fragment>
            <div className='' style={{ margin: '10rem' }}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empl && empl.length > 0 ?
                                empl.map((val, index) => (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.Name}</td>
                                        <td>{val.Age}</td>
                                        <td>
                                            <Button variant="secondary me-2" me-2 onClick={() => Delete(val.id)}>Delete</Button>
                                            <Link to={'/edit'}>
                                                <Button variant="danger" onClick={() => Edit(val.id, val.Name, val.Age)}>Edit</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                                : "NO DATA AVILABLE "
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grid gap-2' to='/create' >
                    <Button size='lg' >Create</Button>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Home;