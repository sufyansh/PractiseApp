import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'
const UsersList = (props) => {
  return (
    <Card classes={classes.users} >
      <ul >
        {props.users.map((user) => (
          <li key={user.id} >
            {user.name} ({user.Age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
