import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetTokenStorage } from '../utils/Localstorage';
import { getTodos, createTodo } from '../services/todoApi';
import { TypeTodo } from '../services/todoApi';
import TodoList from '../components/TodoList';
import { Container, Input, Title, Button } from '../components/TodoForm';

export default function Todo() {
  const nav = useNavigate();
  const [todos, setTodos] = useState<Array<TypeTodo>>();
  const inputRef = useRef<HTMLInputElement>(null);
  const ClickHandler = async () => {
    const todo = inputRef.current?.value.toString();
    if (todo) {
      const data = { todo: todo };
      const res = await createTodo(data);
      inputRef.current!.value = '';
      if (res) {
        Getdata();
      }
    }
  };
  async function Getdata() {
    const data = await getTodos();
    setTodos(() => data);
  }
  useEffect(() => {
    if (!GetTokenStorage()) {
      nav('/');
    } else {
      Getdata();
    }
  }, []);
  return (
    <div>
      <Container>
        <Title>Todo List</Title>
        <Input ref={inputRef} />
        <Button
          onClick={(e) => {
            ClickHandler();
          }}
        >
          등록
        </Button>
        {todos && <TodoList todos={todos} Getdata={Getdata} />}
      </Container>
    </div>
  );
}
