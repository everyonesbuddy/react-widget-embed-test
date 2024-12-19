import { Button } from "@mui/material";
import { X, MessageCircle } from "lucide-react";

export const WidgetButton = ({ onClick, isOpen, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="secondary"
      style={{
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      className="flex items-center gap-2 transition-all duration-200"
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
    </Button>
  );
};
