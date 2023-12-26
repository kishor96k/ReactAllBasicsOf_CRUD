import './Home.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { PlusCircle, Edit, Trash2 } from 'react-feather';
import { Modal } from 'react-responsive-modal';


const Home = () => {

    const blankUser = {
        name: '',
        email: '',
        address: ''
    }
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(blankUser);
    const [userdata, setUserData] = useState([]);
    const [action, setAction] = useState('Add');
    const [editIndex, setEditIndex] = useState(null);


    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => { setOpen(false); setAction('Add') };

    const addUser = (event) => {
        setUserData([...userdata, user]);
        setUser(blankUser);
        onCloseModal();
    }

    const editUser = (id) => {
        setAction('Edit');
        const selectedUser = userdata.find((val, ind) => ind === id);
        setUser(selectedUser);
        setEditIndex(id);
        onOpenModal();
    }

    const updateUser = () => {
        const newusers = userdata.map((value, index) => {
            if (index === editIndex) {
                value = user
            }
            return value
        });
        setUserData(newusers);
        setUser(blankUser);
        setEditIndex(null);
        onCloseModal();
    }

    const deleteUser = (index) => {
        const newusers = userdata.filter((x, i) => { return i !== index });
        setUserData(newusers);
    }

    return (
        <div className='container'>

            <div className='d-flex'>
                <h1>__C_R_U_D__</h1>
            </div>
            <div className='toolbar'>
                <button className='btn' onClick={onOpenModal}>
                    <PlusCircle size={16}></PlusCircle>
                    <span>Add</span>
                </button>
            </div>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.length > 0 && userdata.map((values, index) => (
                        <tr key={index}>
                            <td>{values.name}</td>
                            <td>{values.email}</td>
                            <td>{values.address}</td>

                            <td>
                                <button className='btn ml2 me-2' onClick={() => { editUser(index) }}>
                                    <Edit size={15}></Edit><span>Edit</span>
                                </button>

                                <button className='btn' onClick={() => { deleteUser(index) }}>
                                    <Trash2 size={15}></Trash2><span>Delete</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>{action} User</h2>
                <div className='form'>
                    <label className=''>Name</label>
                    <input value={user.name} type="text" onChange={(e) => { setUser({ ...user, "name": e.target.value }) }} />
                    <label className=''>Email</label>
                    <input value={user.email} type="email" onChange={(e) => { setUser({ ...user, "email": e.target.value }) }} />
                    <label className=''>Address</label>
                    <textarea value={user.address} cols="20" rows="4" onChange={(e) => { setUser({ ...user, "address": e.target.value }) }}></textarea>
                    {action === "Add" && <button className='btn' type='submit' onClick={() => { addUser() }}>Submit</button>}
                    {action === "Edit" && <button className='btn' type='submit' onClick={() => { updateUser() }}>Update</button>}
                </div>
            </Modal>
        </div>
    );
};

export default Home;