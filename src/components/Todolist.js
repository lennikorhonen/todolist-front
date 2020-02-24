import React, {useState} from 'react';

export default function Todolist() {

  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const deleteTodo = index => { 
    setTodos(todos.filter((todo, i) => i !== index));
  }

    return (
        <div><div className="box black">Simple todo list</div>
        <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo:</legend>
          Description: <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
          Date: <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
          <input type="submit" value="Add" />
          </fieldset>
        </form>
      <table>
        <tbody>
        <th>Description</th>
        <th>Date</th>
          {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>)}
        </tbody>
      </table>
      </div>
    )
}