import React from "react";
import "./look.css";
const tableHeadings = [
  "S.no",
  "First_Name",
  "Last_Name",
  "Email",
  "Contact",
  "City",
  "Gender",
  "Terms",
  'Action'
];
const Table = ({ users, setUser,setEditUser,setState }) => {
    const deleteUser=(index)=>{
        const user = [...users];
        user.splice(index,1);
        setUser(user);
    };
    const EditUser=(index)=>{
        const user = users[index];
        setState(user);
        setEditUser(index);
    };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {tableHeadings.map((headings, index) => (
              <th key={index}>{headings}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((items, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.firstName}</td>
                <td>{items.lastName}</td>
                <td>{items.email}</td>
                <td>{items.contact}</td>
                <td>{items.city}</td>
                <td>{items.gender}</td>
                <td>{items.terms ? "Accept" : "Decline"}</td>
                <td>
                <button className="editbutton" onClick={()=>EditUser(index)}>
                    Edit
                    </button>
                <button className="deletebutton" onClick={()=>deleteUser(index)}>
                    Delete
                    </button>
                    </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
