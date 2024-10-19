import { useEffect, useState } from 'react';
import { GetAllTodos } from './lib/todo';
import { Todo } from './domain/todo';
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const getAllTodos = async () => {
      const todosData = await GetAllTodos();
      setTodos(todosData);
    };
    getAllTodos();
  }, []);

  return (
    <>
      <h1 data-testid="title">TODOリスト</h1>
      <TableContainer width={{ base: 'full', md: '25%' }} mx="auto">
        <Table variant="bubble" size="sm">
          <TableCaption placement="top">Spending By Month</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Done</Th>
              <Th isNumeric>Spending</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <Td>{todo.title}</Td>
                <Td>{todo.done ? 'TRUE' : 'FALSE'}</Td>
                <Td>{todo.created_at}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
