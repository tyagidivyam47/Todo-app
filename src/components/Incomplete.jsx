import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { comActions } from "../store/com-slice";
import { incomActions } from "../store/incom-slice";

const Incomplete = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.incomTodo.todos);

  const onDoneClick = (item) =>{
    dispatch(incomActions.removeTodo(item.id));
    dispatch(comActions.addTodo(item))
  }

  return (
    <div className="">
      <p className="text-center text-xl text-yellow-400 font-semibold">
        Incomplete
      </p>
      <ul className="ml-10 text-lg">
        {todos.map((item) => (
          <div className="bg-yellow-400 m-4 text-gray-600 p-3 rounded-lg ">
            <li className="font-extrabold" key={item.id}>{item.todo}</li>
            <button className="bg-green-500 p-1 rounded-xl" onClick={() => onDoneClick(item)}>Done</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Incomplete;
