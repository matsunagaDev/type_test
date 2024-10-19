import { Todo } from '../domain/todo';
import { supabase } from '../utils/supabase';

export async function GetAllTodos(): Promise<Todo[]> {
  const todosData = await supabase.from('todos').select('*');
  if (todosData.error) {
    throw new Error(todosData.error.message);
  }
  console.log(todosData.data);

  const Data = todosData.data.map((todo) => {
    return Todo.newTodo(todo.id, todo.title, todo.done, todo.created_at);
  });

  return Data;
}
