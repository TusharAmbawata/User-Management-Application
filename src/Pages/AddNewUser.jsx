import React, { useRef, useState } from 'react'
import { useUser } from '../context/userauth';
import toast from 'react-hot-toast';

const AddNewUser = () => {
    const [user, setUser] = useState({ name: "", email: "", username: "", phone: "", address: "", company: "", website: "" });
    const { addUser } = useUser();
    const ref = useRef(null)
    const refClose = useRef(null)

    const handleClick = (e) => {
        e.preventDefault();
        // toast.success("User Added Successfully");
        alert("User Added Successfully!");
        addUser(user.name, user.email, user.username, user.phone, user.address, user.company, user.website);
        setUser({ name: "", email: "", username: "", phone: "", address: "", company: "", website: "" })
        refClose.current.click();
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <button ref={ref} className='btn btn-primary mx-2 s-device' data-bs-toggle="modal" data-bs-target="#AddUserModal">Add New User</button>
            <div className="modal fade" id="AddUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New User</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refClose}></button>
                        </div>
                        <form className='p-4'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" required minLength={3} name='name' value={user.name} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required name='email' value={user.email} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" required minLength={3} name='username' value={user.username} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" required name='phone' value={user.phone} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" required name='address' value={user.address} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label">Company</label>
                                <input type="text" className="form-control" id="Company" minLength={3} name='company' value={user.company} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="website" className="form-label">Website</label>
                                <input type="text" className="form-control" id="Website" minLength={3} name='website' value={user.website} onChange={onChange} />
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button type="button" className="btn btn-primary" disabled={user.name.length < 3 || user.username.length < 3} onClick={handleClick}>Add User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewUser
