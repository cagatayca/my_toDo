import React, { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  { id: 1, title: "Pay the Bill", completed: false },
  { id: 2, title: "Workout", completed: true }
]

function App() {

  const addNew = title => {
    setList([...list, { id: Date.now(), title: newTitle, completed: false }]);
    setNewTitle("");
  }

  const markCompleted = (id) => {
    setList(list.map((el) => el.id === id ? { ...el, completed: !el.completed } : el));
  }

  const clearCompleted = () => {
    setList(list.filter(item => !item.completed))
  }



  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("")


  return (
    <div className="App">
      <div className="borderr">
        <h1>MY TODO</h1>
        <div className="add_form">
          <input className="form-control" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
            placeholder="add list..." />
          <button className="btn btn-info" type="button" id="button-addon1" onClick={() => addNew(newTitle)}>Add</button>
        </div>
        <div className="list">
          {list.map((item, index) => (
            <div key={index} onClick={() => markCompleted(item.id)} className={item.completed ? "completed" : ""}>
              {item.title}
            </div>
          ))}
        </div>
        <button type="button" onClick={() => clearCompleted()}
          className="cleaner btn btn-info">Clear Completed</button>
      </div>
    </div>
  );
}

export default App;
