import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TiTrash } from "react-icons/ti";
import { AiTwotoneEdit } from "react-icons/ai";
import "./Todo.css";

const Todo = () => {
  //STATES
  const [input, setinput] = useState([]);
  const [listedItem, setlistedItem] = useState([]);
  const [edits, setedits] = useState(null)
  //INPUT VALUE TARGET
  const inputVal = (event) => {
    return setinput(event.target.value);

  };
  //STORING INPUT VALUE
  const listedBtn = (e) => {
    //Storing data in local storage
    e.preventDefault();
    localStorage.setItem("input", input);
    //PRINT LISTED ITEMS IN CONTAINER
    setlistedItem((old) => {
      return [...old, input];
    });
    setinput("");
  };
  //DELETING LIST ITEMS
  const deleteItem = (id) => {
    setlistedItem((old) => {
      return old.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  //GET ITEM FROM LOCAL STORAGE
  const getItem = () => {
    console.log(console.log(localStorage.getItem("input")));
  };
  //EDITING FUNCTION
  const edit = () => {
    console.log("edited");

  };

  // <-------------------------------------------------------------------------------------------->
  return (
    <div className="container">
      <div className="head">
        <h3>TODO APP</h3>
      </div>

      <div className="inputs">
        <input
          onChange={inputVal}
          type="text"
          value={input}
          className="filled"
          placeholder="Enter your task..."
        />
        <button onClick={listedBtn} className="inputbtn">
          +
        </button>
        <button onClick={getItem}>get</button>
      </div>
      <div className="box">
        {listedItem.map((data, index) => (
          <div className="list">
            <TiTrash
              id={index}
              key={index}
              onClick={() => {
                deleteItem(index);
              }}
              style={{
                marginTop: "14px",
                marginLeft: "3px",
              }}
            />
            <AiTwotoneEdit
              onClick={edit}
              style={{
                marginTop: "14px",
                marginLeft: "3px",
              }}
            ></AiTwotoneEdit>

            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
