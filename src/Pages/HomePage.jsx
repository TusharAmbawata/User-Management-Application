import React, { useEffect } from 'react'
import { useUser } from '../context/userauth'
import Spinner from '../Spinner';

const HomePage = ({ updateUser }) => {
    const { user, getUser, deleteUser } = useUser();

    useEffect(() => {
        getUser();
    }, [])




    return (
        <div className='mt-4'>
            <h1 className='text-center my-2'>User Management Application</h1>
            <div className='w-75 mx-auto my-4 s-wid'>
            <div className="container mx-2"> 
                </div>
                <div className='table-responsive'>
                {user.length===0 && <Spinner/>}
                    <table className="table">
                        <thead>
                            <tr className='table-primary'>
                                <th scope="col" className='text-center'>S.No.</th>
                                <th scope="col" className='text-center'>Name</th>
                                <th scope="col" className='text-center'>Email</th>
                                <th scope="col" className='text-center'>Username</th>
                                <th scope="col" className='text-center'>Phone</th>
                                <th scope="col" className='text-center'>Website</th>
                                <th scope="col" className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user?.map((o, i) => {
                                // Define an array of color classes
                                const rowClasses = ['table-warning', 'table-dark', 'table-info', 'table-success', 'table-danger', 'table-light', 'table-secondary'];
                                // Rotate through the classes
                                const rowClass = rowClasses[i % rowClasses.length];

                                return (
                                    <tr className={rowClass} key={o.id}>
                                        <th scope="row" className='text-center'>{i + 1}</th>
                                        <td className='text-center'>{o.name}</td>
                                        <td className='text-center'>{o.email}</td>
                                        <td className='text-center'>{o.username}</td>
                                        <td className='text-center'>{o.phone}</td>
                                        <td className='text-center'>{o.website}</td>
                                        <td className='text-center'>
                                            <div className='d-flex'>
                                                <button className='btn btn-primary mx-1' onClick={() => updateUser(o)}>Update</button>
                                                <button className='btn btn-danger mx-1' onClick={() => deleteUser(o.id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HomePage
