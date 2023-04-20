import { FunctionComponent } from 'react';
import { Todo } from '../../types';

const TodoCard: FunctionComponent<Todo> = ({ id, title, completed }) => {
  return completed ? (
    <div className="flex flex-col my-auto items-center">
      <div className="flex flex-col my-auto items-center max-w-sm p-6 w-full h-[120px] bg-green-200 border border-gray-200 rounded-lg shadow">
        <a href={`http://localhost:3000/todos/${id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            #{id}
          </h5>
        </a>
        <p className="mb-3 font-normal text-center  text-gray-700">{title.slice(0, 20)}</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col my-auto items-center">
      <div className="flex flex-col my-auto items-center max-w-sm p-6 w-full h-[120px] bg-red-200 border border-gray-200 rounded-lg shadow">
        <a href={`http://localhost:3000/todos/${id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            #{id}
          </h5>
        </a>
        <p className="mb-3 font-normal text-center  text-gray-700">{title.slice(0, 20)}</p>
      </div>
    </div>
  );
};

export default TodoCard;
