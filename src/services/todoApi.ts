import { TodoApi } from './Axios';

type todo = {
  todo: string;
};

type updatetodo = {
  todo: string;
  isCompleted: boolean;
  id: number;
};
type deletetodo = {
  id: number;
};

type Status = number;

export type TypeTodo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export const createTodo = async (todo: todo): Promise<TypeTodo> => {
  const { data } = await TodoApi.post('/todos', todo);
  return data;
};
export const getTodos = async (): Promise<TypeTodo[]> => {
  const { data } = await TodoApi.get('/todos');
  return data;
};

export const updateTodo = async (
  id: updatetodo['id'],
  todo: updatetodo['todo'],
  isCompleted: updatetodo['isCompleted']
): Promise<TypeTodo> => {
  const { data } = await TodoApi.put(`/todos/${id}`, { todo, isCompleted });
  return data;
};

export const deleteTodo = async (id: deletetodo['id']): Promise<Status> => {
  const data = await TodoApi.delete(`/todos/${id}`);
  return data.status;
};
