import React, {useState} from 'react';
import 'react-table-v6/react-table.css';
import Todotable from './Todotable';

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

  const deleteTodo = (event) => {
    event.preventDefault();
    setTodos(todos.filter((todo, index) => index !== parseInt(event.target.id)));
  }

  const columns = [{
    Header: 'Description',
    accessor: 'desc'
  }, {
    Header: 'Date',
    accessor: 'date'
  }, {
    Cell: ({index}) => <button id={index} onClick={deleteTodo}>Delete</button>,
    filterable: false,
    sortable: false,
    width: 65
  }]

    return (
        <div>
        <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo:</legend>
          Description: <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
          Date: <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
          <input type="submit" value="Add" />
          </fieldset>
          <Todotable todos={todos} columns={columns}/>
        </form>
      </div>
    )
}