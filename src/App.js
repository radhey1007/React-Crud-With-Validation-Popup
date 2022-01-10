import React , {Fragment , useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

  const [userList , setUserList] = useState([]);

  const addUserHandler = (userName,age) => {
    setUserList((prevUserList)=> {
      return [...prevUserList , {name:userName , age : age , id: Math.random.toString()}]; 
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} /> 
      {userList.length > 0 && <UserList users={userList}/> }
    </Fragment>
  );
}

export default App;
