import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
function App() {
  const[userList , setUserList] = useState([]);
  const onAddUserHandler = (uName , uAge) =>{
    setUserList((previousData ) =>{
      return [...previousData , {name: uName , Age: uAge , id : Math.random().toString()}];
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser ={onAddUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
