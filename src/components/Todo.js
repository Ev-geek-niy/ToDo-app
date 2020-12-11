import React from "react";

export default class Todo extends React.Component {
    state = {
        editing: true
    }

    handleEdit = todo => {
        this.setState({
            editing: true,
            editText: this.props.todo.text
        });

    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    

    render() {
        return(
            <div>
                    <label style={{display: this.state.editing ? "inline" : "none"}} onDoubleClick={this.handleEdit}>{this.props.todo.text}</label>
                    <input value={this.state.editText} onChange={this.handleChange} onBlur={this.props.handleSave}/>

                <button onClick={this.props.toggleComplete}>✅</button>
                <button onClick={this.props.handleDelete}>❌</button>
                <button onClick={this.handleEdit}>edit</button>
            </div>
        );
    }
}