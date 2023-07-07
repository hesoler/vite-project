import React from "react";
import { userList } from "../data/jsonData";
import { Link } from "react-router-dom";
import { generateQuickGuid } from "../App";

function Form() {
  function update() {
    userList.push({
      id: generateQuickGuid(),
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      student: document.getElementById("student").checked,
      professional: document.getElementById("professional").checked,
    });
  }

  return (
    <>
      <h2>User Form</h2>
      <div>
        <form onSubmit={update}>
          <div>
            <div className="formBlock">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required={true} />
            </div>
            <div className="formBlock">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                defaultValue="0"
                min="0"
                max="80"
                required={true}
                style={{ textAlign: "right" }}
              />
            </div>
            <div className="formBlock">
              <label htmlFor="student">Student</label>
              <input type="checkbox" id="student" defaultChecked={false} />
            </div>
            <div className="formBlock">
              <label htmlFor="professional">Professional</label>
              <input type="checkbox" id="professional" defaultChecked={false} />
            </div>
          </div>
          <button type="submit">Acept</button>
        </form>
        <br />
        <Link to="/users">Back to users</Link>
      </div>
    </>
  );
}

export default Form;
