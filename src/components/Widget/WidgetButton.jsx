import { X, MessageCircle } from "lucide-react";

export const WidgetButton = ({ onClick, isOpen, text }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full shadow-lg flex items-center gap-2 bg-primary hover:bg-primary/90 transition-all duration-200"
    >
      {isOpen ? (
        <>
          <X className="h-4 w-4" />
          <span>Close</span>
        </>
      ) : (
        <>
          <MessageCircle className="h-4 w-4" />
          <span>{text}</span>
        </>
      )}
    </button>
  );
};
