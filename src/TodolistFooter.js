import React from 'react';


class TodolistFooter extends React.Component {
    render = () => {
        return (

            <div className="todoList-footer">
                <button>All</button>
                <button>Completed</button>
                <button>Active</button>
            </div>


        );
    }
}

export default TodolistFooter;

