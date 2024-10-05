import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  //Get User from json placeholder api
  const getUser = async() => {
    try {
      //Api Call
      const response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      setUser(json);
    } catch (error) {
      toast.error("Sorry! Some error Occured");
    }
  }

  // Add New User
  const addUser = async(name,email,username,phone,address,company,website) => {
    try {
      //Api Call
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({id:Date.now(),name,email,username,phone,address,company,website}),
      });
      const users = await response.json();
      setUser(user.concat(users));
    } catch (error) {
      toast.error("Sorry! Some error Occured");
    }
  }
  
  // Delete a User
  const deleteUser = async(id)=>{
    try {
      //Api Call
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });
      const json = response.json();
      const confirmDelete = window.confirm("Are you sure you want to delete User");

      if(confirmDelete)
      {
        const newUser = user.filter((user)=>{return user.id !== id});
        setUser(newUser);
        alert("User Deleted Successfully");
      }
      else
      {
        alert("User Not Deleted");
      }

    } catch (error) {
      toast.error("Sorry! Some error Occured");
    }
  }

  // Update a User
  const editUser = async(id,name,email,username,phone,address,company,website)=>{
    try {
      //Api Call
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,username,phone,address,company,website})
      });

      const json = await response.json(); 

     let newUsers = JSON.parse(JSON.stringify(user))
    // Logic to edit in client
    for (let index = 0; index < newUsers.length; index++) {
      const element = newUsers[index];
      if (element.id === id) {
        newUsers[index].name = name;
        newUsers[index].email = email;
        newUsers[index].username = username; 
        newUsers[index].phone = phone; 
        newUsers[index].address = address; 
        newUsers[index].company = company; 
        newUsers[index].website = website; 
        break; 
      }
    }  
    setUser(newUsers);
    alert("User Updated Successfully");
    } catch (error) {
      toast.error("Sorry! Some error occured");
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser, getUser, addUser, deleteUser,editUser}}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
