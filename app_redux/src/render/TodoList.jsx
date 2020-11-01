import React, { Component } from 'react'
import TodoItems from '../component/TodoItems'

class TodoList extends Component {

    state = {
        todo: [
            { id: "1", content: "Nguyen Kim Tien" },
            { id: "2", content: "Le Thi Thuy Linh" },
            { id: "3", content: "Nguyen Quoc Toan" }
        ]
    }

    AddTodo = (data) => {

        const todoItems = this.state.todo

        todoItems.push(data)

        console.log(todoItems)

        this.setState({
            todo: todoItems
        })

        console.log(this.state.todo)
    }

    DeleteTodo = (id) => {

        const todoItems = this.state.todo

        todoItems.splice(id, 1)

        this.setState({
            todo: todoItems
        })

    }

    render() {

        console.log(this.state.todo)
        return (
            <div className="todo_list card">
                <div className="header center">
                    <h2>Todo List</h2>
                </div>
                <TodoItems todoList={this.state.todo} AddTodo={this.AddTodo} DeleteTodo={this.DeleteTodo} />
            </div>
        )
    }

}

export default TodoList