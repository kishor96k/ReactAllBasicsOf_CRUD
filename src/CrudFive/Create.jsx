import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import empl from './Employee';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const allId = uuid();
        let uniqueId = allId.slice(0, 8);
        let nameVal = name;
        let ageVal = age;
        empl.push({ id: uniqueId, Name: nameVal, Age: ageVal });
        navigate('/');
    };

    return (
        <>
            <Form className='d-grid gap-2' style={{ margin: '15rem' }} onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type='number' placeholder='Enter age' onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <Button type='submit'>Submit</Button>
                {/* <Button onClick={(e)=>{handleSubmit(e)}} type='submit'>Submit</Button> */}

            </Form>
        </>
    );
};

export default Create;
