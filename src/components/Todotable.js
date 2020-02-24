import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

export default function Todotable(props) {
    return(
        <div>
            <ReactTable data={props.todos} columns={props.columns} 
            sortable='true' defaultPageSize='10' filterable='true'/>
        </div>
    )
}