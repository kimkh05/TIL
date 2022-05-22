import React from "react";
import TodoList from "../TodoList/index";
import TodoTitle from "../TodoTitle/index";
import "./styles.scss";

const TodoTemplate = (): JSX.Element => {
  return (
    <div className="TodoTemplate">
      <div className="TodoTemplate-Contents">
        <TodoTitle />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoTemplate;
