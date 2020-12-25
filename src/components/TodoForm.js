import React from "react";

export default class TodoForm extends React.Component {
    state = {
        text: "",
        id: 0
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.text.length !== 0){
            this.props.onSubmit({
              id: this.state.id,
              text: this.state.text,
              complete: false
            });
            this.setState({
              text: "",
              id: this.state.id + 1
            });
        } 
    };


    render() {
        return (
            <div className="new-task-creator">
            <form onSubmit={this.handleSubmit}>
                <input className="newlist" placeholder="Создать новый" aria-label="Создать новый" name="text" value={this.state.text} onChange={this.handleChange} />
                <button className="btn list" aria-label="Создать новый" onClick={this.handleSubmit}>+</button>
            </form>
        </div>
            
        );
    }
}
