import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm.js";
import TodoListItem from "./TodoListItem.js";
import "./TodoList.css";
import { removeTodo, markTodoAsCompleted } from "./actions.js";
// import { displayAlert } from "./thunks.js";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
            />
    ))}
  </div>
);

const mapStateToProps = state => ({
    todos:state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
