import React from "react";

export default props => (
    <div>
        <div>{props.todo.text}</div>
        <button onClick={props.toggleComplete}>✅</button>
        <button onClick={props.handleDelete}>❌</button>
    </div>
);