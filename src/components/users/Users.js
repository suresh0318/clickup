import React from "react";
import "./users.css";
import Data from "../../Data";
import { FiUsers } from "react-icons/fi";
import { ProgressBar } from "react-bootstrap";
const Users = () => {
  return (
    <div className="users ">
      <table className="table table-hover shadow-lg p-3 mb-5 bg-white rounded">
        <thead>
          <tr>
            <th scope="col">
              <FiUsers />
            </th>
            <th scope="col">User</th>
            <th scope="col">Age</th>
            <th scope="col">Usage</th>
            <th scope="col">Registered</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((user) => {
            return (
              <tr>
                <th scope="row">
                  <img src={user.picture} alt={user.name} />
                  <div
                    className="status"
                    style={{ backgroundColor: user.isActive ? "green" : "red" }}
                  ></div>
                </th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <ProgressBar
                    variant={user.age < 30 ? "success" : "danger"}
                    now={user.age}
                    height={10}
                  />
                </td>
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
