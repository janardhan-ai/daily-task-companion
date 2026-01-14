import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="flex gap-3"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 bg-card rounded-xl shadow-soft border-0 outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/50 transition-all duration-300"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="px-4 py-3 bg-primary text-primary-foreground rounded-xl shadow-soft hover:shadow-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Plus className="w-5 h-5" />
      </button>
    </motion.form>
  );
};

export default AddTodo;
