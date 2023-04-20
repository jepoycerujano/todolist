import { Inter } from 'next/font/google';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

import TodoCard from '../components/card';
import { Todo } from '../../types';

const inter = Inter({ subsets: ['latin'] });

const fetchTodo = (url: string | URL) => fetch(url).then((r) => r.json());

export default function Home() {
  const [todo, setTodo] = useState([]);

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/todos',
    fetchTodo
  );

  useEffect(() => {
    setTodo(data);
  }, [data]);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const filterTodo = (filterVal: string) => {
    if (!filterVal) {
      setTodo(data);
      return;
    }

    const filter = todo.filter((el: Todo) => el.title.includes(filterVal));
    setTodo(filter);
  };

  if (!!todo) {
    return (
      <div className="p-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex flex-col my-auto items-center mb-10">
            <input
              className="border-2 w-[350px] border-gray-400 bg-white h-10 p-5 rounded-lg font-normal focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              onChange={(e) => filterTodo(e.target.value.toString())}
            ></input>
          </div>

          {todo.map((el: Todo) => (
            <TodoCard
              key={el.id}
              id={el.id}
              title={el.title}
              completed={el.completed}
            />
          ))}
        </div>
      </div>
    );
  }
}
