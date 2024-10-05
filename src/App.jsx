import { useRef, useState } from 'react';
import Navbar from './Layout/Navbar'
import HomePage from './Pages/HomePage'
import { useUser } from './context/userauth';

function App() {
  const [user, setUser] = useState({id:"" , ename: "", eemail: "", eusername: "", ephone: "", eaddress: "", ecompany: "", ewebsite: "" });
  const { editUser } = useUser();
  const ref = useRef(null)
  const refClose = useRef(null)

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const updateUser = (currentUser) => {
    ref.current.click();
    setUser({ id: currentUser.id, ename: currentUser.name, eemail: currentUser.email, eusername: currentUser.username, ephone: currentUser.phone, eaddress: currentUser.address.city, ecompany: currentUser.company.name, ewebsite: currentUser.website })
  }

  const onClick = () => {
    editUser(user.id,user.ename, user.eemail, user.eusername, user.ephone, user.eaddress, user.ecompany, user.ewebsite);
    alert("User Updated Successfully");
    refClose.current.click();
  }

  return (
    <>
      <div>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#UpdateModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="UpdateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update User</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={refClose}></button>
              </div>
              <form className='p-4'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="ename" required minLength={3} name='ename' value={user.ename} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="eemail" required name='eemail' value={user.eemail} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="eusername" required minLength={3} disabled name='eusername' value={user.eusername} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="ephone" required name='ephone' value={user.ephone} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="eaddress" required name='eaddress' value={user.eaddress} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input type="text" className="form-control" id="eCompany" minLength={3} name='ecompany' value={user.ecompany} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="website" className="form-label">Website</label>
                  <input type="text" className="form-control" id="eWebsite" minLength={3} name='ewebsite' value={user.ewebsite} onChange={onChange} />
                </div>
              </form>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                <button type="button" className="btn btn-primary" disabled={user.ename.length < 3 || user.eusername.length < 3} onClick={onClick}>Update User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <HomePage updateUser={updateUser} />
    </>
  )
}

export default App
