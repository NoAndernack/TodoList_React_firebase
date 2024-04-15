import TodoItems from "./TodoItems";

const TodoList = ({todos , setEdit , removeTodo}) => {
    return (
        <div className="bg-gray-100 p-6 rounded shadow-md max-w-lg lg:w-1/4">
        <ul>

          {todos.map((todo, index) => (
            <TodoItems key={index} index={index} todo={todo} setEdit ={setEdit} removeTodo = {removeTodo} />
          ))}
          
          
        </ul>
      </div>
    );
}

export default TodoList;