import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <div className="row">
        <div className="col-2">{todo.title}</div>
        <div className="col-6">
          <button
            onClick={() => dispatch(setTodo(todo))}
            id="wd-set-todo-click"
            className="btn btn-sm btn-primary ms-1 me-1"
          >
            Edit{" "}
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            id="wd-delete-todo-click"
            className="btn btn-sm btn-danger"
          >
            Delete{" "}
          </button>
        </div>
      </div>
    </li>
  );
}
