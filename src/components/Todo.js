import React from "react";

export default props => (
    <div className="task">
        <input type="checkbox" />
        <label>
            <span className="custom-checkbox" onClick={props.toggleComplete}></span>
            <div  style={{ textDecoration: props.todo.complete ? "line-through" : "" }} onClick={props.toggleComplete}>
                {props.todo.text}
            </div>
        </label>
    </div>
);