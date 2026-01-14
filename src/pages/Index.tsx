import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "@/components/TodoItem";
import AddTodo from "@/components/AddTodo";
import { CheckCircle2 } from "lucide-react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Welcome to your todo list", completed: false },
    { id: "2", text: "Add new tasks below", completed: false },
    { id: "3", text: "Click to complete tasks", completed: true },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            My Tasks
          </h1>
          <p className="text-muted-foreground">
            {completedCount} of {todos.length} completed
          </p>
        </motion.div>

        <div className="space-y-4 mb-6">
          <AddTodo onAdd={addTodo} />
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </AnimatePresence>

          {todos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-muted-foreground"
            >
              <p>No tasks yet. Add one above!</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
