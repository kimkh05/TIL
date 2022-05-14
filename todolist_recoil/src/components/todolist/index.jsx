import React, { useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

const Todolist = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreater />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

const TodoItemCreater = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useRecoilState(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>ADD</button>
    </div>
  );
};

let id = 0;

function getId() {
    return id++;
  }

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

const replaceItemAtIndex = (arr, index, newValue) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];

const removeItemAtIndex = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

export default Todolist && TodoItemCreater && TodoItem;
