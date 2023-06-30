import React from "react";
import foodList from "../data/food";
import "../data/food";

function deleteRow() {
  if (foodList.length > 0) {
    foodList.pop();
    document
      .getElementById("foodTable")
      .childNodes[1].deleteRow(foodList.length - 1);
  }
}

function FoodView() {
  return (
    <>
      <table id="foodTable" border="1">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {foodList.map((food) => {
            return (
              <tr key={food.code}>
                <td>{food.code}</td>
                <td>{food.description}</td>
                <td>{food.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <button onClick={deleteRow}> Delete last row</button>
    </>
  );
}

export default FoodView;
