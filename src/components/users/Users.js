import React from "react";
import "./users.css";
import Data from "../../Data";
import { FiUsers } from "react-icons/fi";

const Users = () => {
  return (
    <div className="users ">
      <table  className="table table-hover shadow-lg m-3 bg-white bordered">
        <thead>
          <tr>
            <th scope="col">
              <FiUsers />
            </th>
            <th scope="col">User</th>
            <th scope="col">Country</th>
            <th scope="col">Usage</th>
            <th scope="col" className="d-flex justify-content-center">Payment Method</th>
            <th scope="col">Registered</th>
          </tr>
        </thead>
        <tbody >
          {Data.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">
                  <img src={user.picture} alt={user.name} />
                  <div
                    className="status"
                    style={{ backgroundColor: user.isActive ? "green" : "red" }}
                  ></div>
                </th>
                <td>{user.name}</td>
                <td>
                <img src={user.country} alt={user.name} />
                </td>
                
                <td >
                 <b>{user.age}%</b>
                 <div style={{ width: `${user.age}%`, background: user.age > 70 ? "red" : (user.age > 50 ? "#996ce8" : (user.age > 30 && "#ffd82d")) }} className='bar'></div>
                </td>
                <td  className="d-flex justify-content-center"> <img src={user.payment} alt={user.name} className="center"/></td>
                <td>{user.registered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
