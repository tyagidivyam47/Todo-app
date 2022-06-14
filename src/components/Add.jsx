import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incomActions } from "../store/incom-slice";

let id = 1;

const Add = () => {
  const [todo, setTodo] = useState("");
  const [showTodo, setShowTodo] = useState(false);

  const dispatch = useDispatch();

  const onInputChangeHandler = (e) => {
    // console.log(e.target.value)

    setTodo(e.target.value);
  };

  const showTodoHandler = () => {
    setShowTodo(!showTodo);
  };

  const onAddHandler = () => {
    dispatch(incomActions.addTodo({
        id: id,
        todo: todo,
    }));
    setTodo("");
    setShowTodo(false)
    id++;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        className="border-2 border-yellow-400 px-4 py-1 hover:bg-yellow-400 font-semibold transition"
        onClick={showTodoHandler}
      >
        ADD ToDo
      </button>

      {showTodo && (
        <div className="space-x-2">
          <input
            type="text"
            value={todo}
            onChange={onInputChangeHandler}
            className="text-black w-96 px-3 py-2 rounded-md"
          />

          <button
            className="border-2 border-yellow-400 px-4 py-1 hover:bg-yellow-400 font-semibold transition"
            onClick={onAddHandler}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default Add;
