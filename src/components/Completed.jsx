import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { comActions } from "../store/com-slice";

const Completed = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.comTodo.todos);
  console.log(todos);

  const onRemoveClick = (item) => {
    dispatch(comActions.removeTodo(item.id));
    // dispatch(comActions.addTodo(item.todo));
    console.log(item.id)
  };

  return (
    <div className="">
      <p className="text-center text-xl text-yellow-400 font-semibold">
        Completed
      </p>
      <ul className="ml-10 text-lg">
        {todos.map((item) => (
          <div className="bg-yellow-400 m-4 text-gray-600 p-3 rounded-lg ">
            <li className="font-extrabold" key={item.id}>
              {item.todo}
            </li>
            <button
              className="bg-red-500 p-1 rounded-xl"
              onClick={() => onRemoveClick(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
