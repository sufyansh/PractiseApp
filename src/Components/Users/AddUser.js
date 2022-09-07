import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandlerDefault = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0|| enteredAge.trim().length===0 ){
        return 
    }
    if(+enteredAge <1){
        return;
    }
    console.log(enteredUsername);
    console.log(enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };
  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandlerDefault}>
        <label htmlFor="usernme"> Username </label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameHandler}
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
