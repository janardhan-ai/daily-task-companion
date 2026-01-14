import { Check, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
    >
      <button
        onClick={() => onToggle(id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          completed
            ? "bg-primary border-primary"
            : "border-muted-foreground/30 hover:border-primary/50"
        }`}
      >
        {completed && <Check className="w-4 h-4 text-primary-foreground" />}
      </button>
      
      <span
        className={`flex-1 text-base transition-all duration-300 ${
          completed ? "text-muted-foreground line-through" : "text-foreground"
        }`}
      >
        {text}
      </span>
      
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-muted-foreground hover:text-destructive transition-all duration-200"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default TodoItem;
