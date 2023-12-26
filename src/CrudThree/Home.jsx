import React, { useState, useRef } from 'react';
import './Home.css'
const Home = () => {
    const list = [
        { id: 1, name: 'abc', price: 123 },
        { id: 2, name: 'def', price: 456 },
        { id: 3, name: 'jkl', price: 789 },
        { id: 4, name: 'mno', price: 147 },
        { id: 5, name: 'pqr', price: 258 },
    ]

    const [lists, setList] = useState(list);
    const [status, setUpdateStatus] = useState(-1);

    const handleEdit = (id) => {
        setUpdateStatus(id);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newList = lists.map((li) => (
            li.id === status ? { ...li, name: name, price: price } : li
        ))
        setList(newList);
        setUpdateStatus(-1);
    }
    return (
        <>
            <AddList setList={setList} />

            <div className='crud'>
                <form action="" onSubmit={onSubmitForm}>
                    <table>
                        {
                            lists.map((values, index) => (
                                status === values.id ? <upodateList current={values} setList={setList} lists={lists} /> :
                                    <tr>
                                        <td>{values.id}</td>
                                        <td>{values.name}</td>
                                        <td>{values.price}</td>
                                        <td>
                                            <button className='edit' onClick={() => { handleEdit(values.id) }}>Edit</button>
                                            <button className='delete'>Delete</button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </table>
                </form>
            </div>
        </>
    )

};

function upodateList({ values, lists, setList }) {

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setList((prevList) => {
            return prevList.map((li) => (li.id === values.id ? { ...li, [name]: value } : li));
        });
    }

    return (
        <>
            <tr>
                <td><input type="text" name="name" id="name" value={values.name} /></td>
                <td><input type="text" name="price" id="price" value={values.price} /></td>
                <td><button type='submit' className='btn btn-info btn-sm'>Edit</button></td>
            </tr>
        </>
    )
}

const AddList = ({ setList }) => {
    const nameref = useRef();
    const priceref = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newList = { id: 1, name, price };

        setList((prevList) => {
            return prevList.concat(newList);
        })
        nameref.current.value = '';
        priceref.current.value = '';

    }
    return (
        <div className='container mt-4 d-flex justify-content-center align-items-center '>
            <form onSubmit={handleSubmit}>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <input type="text" className='form-control' name="name" id="name" placeholder='enter name' ref={nameref} />
                    </div>
                    <div className="col-md-3">
                        <input type="nummber" className='form-control' name="price" id="price" placeholder='enter price' ref={priceref} />
                    </div>
                    <div className="col-md-2">
                        <button className='btn btn-info' type='submit'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default Home;