import { TypeTodo } from '../../services/todoApi';
import Todo from './Todo';

export default function TodoList(props: {
  todos: TypeTodo[];
  Getdata: () => void;
}): JSX.Element {
  const List = props.todos.map((res) => {
    return <Todo key={res.id} todo={res} Getdata={props.Getdata} />;
  });
  return <>{List}</>;
}
