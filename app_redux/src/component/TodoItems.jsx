import React, { Component } from 'react'

class TodoItems extends Component {

    state = {
        content: ""
    }

    HandlerOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    HandlerOnSubmit = (e) => {
        e.preventDefault()

        console.log(this.state.content)

        const Item = {
            id: Math.random().toString(),
            content: this.state.content
        }

        this.setState({
            content: ""
        })

        this.props.AddTodo(Item)
    }

    HandlerOnClick = (e) => {

        const { todoList } = this.props

        const id = e.target.value.toString()

        const index = todoList.findIndex(value => {
            return value.id === id
        })

        this.props.DeleteTodo(index)

    }

    render() {
        const { todoList } = this.props

        var renderTodo

        if (todoList.length > 0){
            renderTodo = todoList.map(todo => {
                return (
                    <li key={todo.id} onClick={this.HandlerOnClick} value={todo.id}>{todo.content}</li>
                )
            })
        }else{
            renderTodo = <p htmlFor="Empty" className="center white-text">Todo List Is Empty!</p>
        }



        return (
            <div className="todo_item">
                <form onSubmit={this.HandlerOnSubmit}>   
                    <div className="col s12 input_group">
                        <label htmlFor="">Add Item:</label>
                        <input type="text" name="content" onChange={this.HandlerOnChange} value={this.state.content} />
                    </div>
                </form>
                <div className="li_group">
                    {renderTodo}
                </div>
            </div>
        )

    }

}

export default TodoItems