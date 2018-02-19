import * as React from 'react';
import {observer} from "mobx-react";
import Header from "./Header";

interface IToDo {
    todo: any;
}

@observer
class ToDo extends React.Component<IToDo, {}> {
// <h3>{this.props.todo.todos[0]}</h3>

    filter(e) {
        this.props.todo.filter = e.target.value;
    }

    render() {
        const {filter, todos} = this.props.todo;
        const todoList = todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ));

        return (
            <div>
                <h1>todo list</h1>
                <div>{filter}</div>
                <input type="text" className="filter" value={filter} onChange={this.filter.bind(this)}/>
                <ul>{todoList}</ul>
            </div>
        )
    }
}

export default ToDo;
