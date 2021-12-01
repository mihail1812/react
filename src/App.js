import './App.css';
//import { useState, useCallback } from 'react';
import {useUsers} from './hooks/useUsers'

function App() {
  const [users, {addUser, removeUser}] = useUsers();
  return (
    <div className="App">
      <button onClick={addUser}>
        add
      </button>
      <div>
        {
          users.map((item) => <div>{item.name}
            <button onClick={removeUser(item.name)}>
              del
            </button>
          </div>)
        }
      </div>

    </div>
  );
}

export default App;
