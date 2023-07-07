import React from "react";
import { userList } from "../data/jsonData";
import { Link } from "react-router-dom";

function UserTable() {
  return (
    <>
      <div>
        <h2>User List</h2>
        <table className="userList" border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Student</th>
              <th>Professional</th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.student ? "Yes" : "No"}</td>
                  <td>{user.professional ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Link to="form">Create new user</Link>
    </>
  );
}

export default UserTable;
