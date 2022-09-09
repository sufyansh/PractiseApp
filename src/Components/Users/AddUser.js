import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../../Helper/Wrapper";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error ,setError]=useState()
  const addUserHandlerDefault = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0|| enteredAge.trim().length===0 ){
      setError({
        title: "Invalid input",
        message: 'Please enter a valid name and age (non-empty values).',
      }) 
      return 
    }
    if(+enteredAge <1){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      }) 
        return;
    }
    props.onAddUser(enteredUsername,enteredAge);
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
  const onErrorHandler = () => {
    setError(null)
  }
  return (
   <Wrapper>
      {error && (<ErrorModal
      title = {error.title}
      message= {error.message}
      onConfirm ={onErrorHandler}
      />)}
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
    </Card></Wrapper>
  );
};

export default AddUser;
