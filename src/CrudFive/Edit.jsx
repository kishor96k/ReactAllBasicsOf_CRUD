import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import empl from './Employee';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let navigate = useNavigate();

    // Find the index of the employee with the given id
    const index = empl.findIndex((event) => event.id === id);

    const handleEdit = (event) => {
        event.preventDefault();

        // Check if the index is valid before updating
        if (index !== -1) {
            // Update the employee object directly
            empl[index].Name = name;
            empl[index].Age = age;
            empl[index].id = id;
            navigate('/');
        } else {
            console.error('Employee not found'); // Handle the case when the employee is not found
        }
    }

    useEffect(() => {
        // Retrieve data from localStorage
        setName(localStorage.getItem('Name') || '');
        setAge(localStorage.getItem('Age') || '');
        setId(localStorage.getItem('id') || '');
    }, [])

    return (
        <>
            <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type='number' value={age} placeholder='Enter age' onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <Button onClick={(e) => { handleEdit(e) }} type='submit'>Submit</Button>
            </Form>
        </>
    );
};

export default Edit;
