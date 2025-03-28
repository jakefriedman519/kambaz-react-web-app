import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <input
            value={todo.title}
            onChange={(e) =>
              dispatch(setTodo({ ...todo, title: e.target.value }))
            }
          />
        </div>
        <div className="col-6">
          <button
            onClick={() => dispatch(updateTodo(todo))}
            id="wd-update-todo-click"
            className="btn btn-warning btn-sm  ms-1 me-1"
          >
            Update{" "}
          </button>
          <button
            onClick={() => dispatch(addTodo(todo))}
            id="wd-add-todo-click"
            className="btn btn-success btn-sm"
          >
            Add
          </button>
        </div>
      </div>
    </li>
  );
}
