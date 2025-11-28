import "./todo.css";
const TodoApp = () => {
  return (
    <div className="todo-main-box">
      <h1 className="todo-title">Todo List</h1>

      <div className="todo-input-box">
        <input type="text" placeholder="할일 입력하기" />
        <button>추가</button>
      </div>
      <div className="todo-list-box">
        <ul>
          <li>
            <input type="checkbox" />
            <span>장보기</span>
            <button>삭제</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>운동하기</span>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TodoApp;
