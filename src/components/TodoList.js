import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    state = {
        todos: []
    };

    addTodo = todo => {
        this.setState(state => ({
            todos: [...state.todos,todo]
        }));
    };

    toggleComplete = id => {
        this.setState(state =>({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }
                else{
                    return todo;
                }
            })
        }));
    };

    handleDelete = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => id !== todo.id)
        }));
    }

    render(){
        return(
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => (
                    <Todo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)} handleDelete={() => this.handleDelete(todo.id)} todo={todo} />
                ))}
                <div>
                    {JSON.stringify(this.state.todos)}
                </div>
            </div>
        )
    }
}