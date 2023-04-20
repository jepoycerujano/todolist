

export interface Todo {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface User extends Todo {
  username: string;
}

