import React, {useState} from 'react';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Todotable from './Todotable';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';



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

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  const clearTodos = () => {
    setTodos([]);
  }

  const columns = [{
    Header: 'Description',
    accessor: 'desc'
  }, {
    Header: 'Date',
    accessor: 'date'
  }, {
    Cell: row => <Button color = "secondary" size = "small" onClick={() => deleteTodo(row.index)}>Delete</Button>,
    filterable: false,
    sortable: false,
    minWidth: 30
  }]

    return (
        <div>
        <form onSubmit={addTodo}>
          <TextField placeholder="Description" style={{marginRight: 15}} label="Description" name="desc" onChange={inputChanged} value={todo.desc}/>
          <TextField placeholder="Date" style={{marginRight: 15}} label="Date" name="date" onChange={inputChanged} value={todo.date}/>
          <Tooltip title="Add Todo">
          <IconButton placeholder="Add" style={{marginTop: 5}} onClick={addTodo}>
            <AddCircleIcon color="primary" fontSize="large"/>
          </IconButton>
          </Tooltip>
          <Button variant='contained' color='secondary' onClick={() => clearTodos()}>Clear Todos</Button>
          <Todotable todos={todos} columns={columns}/>
        </form>
      </div>
    )
}