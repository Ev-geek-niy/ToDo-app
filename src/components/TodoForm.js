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
        this.props.onSubmit({
          id: this.state.id,
          text: this.state.text,
          complete: false
        });
        this.setState({
          text: "",
          id: this.state.id + 1
        });
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>add</button>
            </form>
        );
    }
}
