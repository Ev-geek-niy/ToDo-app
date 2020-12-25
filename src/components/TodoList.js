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

    removeAllTodosThatAreComplete = () => {
        this.setState(state => ({
          todos: state.todos.filter(todo => !todo.complete)
        }));
      };

    render(){
        return(
            <div className="todo-list">
                <div className="todo-header">
                    CringeDo
                </div>
                {this.state.todos.map(todo => (
                    <Todo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)} handleDelete={() => this.handleDelete(todo.id)} todo={todo} />
                ))}
                <TodoForm onSubmit={this.addTodo}/>
                <div>
                    <button className="btn delete" onClick={this.removeAllTodosThatAreComplete}>
                        Удалить выполненные задачи
                    </button>
                </div>
            </div>
        )
    }
}