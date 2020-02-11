import React from 'react';

export default function Todolist(props) {

    return (
        <div>
            <table>
        <tbody>
        <th>Description</th>
        <th>Date</th>
          {
          props.todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
            </tr>)}
        </tbody>
      </table>
        </div>
    )
}