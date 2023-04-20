import { Inter } from 'next/font/google';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ProfileCard from '../../components/profile';
import { Todo, User } from '../../../types';

const inter = Inter({ subsets: ['latin'] });

const fetcher = (url: string | URL) => fetch(url).then((r) => r.json());

export default function Home() {
  const [todo, setTodo] = useState<Todo>();
  const [user, setUser] = useState<User>();

  const router = useRouter();
  const { id } = router.query;

  const {
    data: dataTodo,
    error: errTodo,
    isLoading: isLoadingTodo,
  } = useSWR(`https://jsonplaceholder.typicode.com/todos/${id}`, fetcher);

  const {
    data: dataUser,
    error: errUser,
    isLoading: isLoadingUser,
  } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher);

  useEffect(() => {
    setTodo(dataTodo);
  }, [dataTodo]);

  useEffect(() => {
    setUser(dataUser);
  }, [dataUser]);

  if (errTodo||errUser) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  if (isLoadingTodo || isLoadingUser) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!!todo && !!user) {
    return (
      <div className="p-10">
        <ProfileCard
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          username={user.username}
        />
      </div>
    );
  }
}
