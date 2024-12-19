import { useState } from "react";
import { WidgetButton } from "./WidgetButton";
import { WidgetContent } from "./WidgetContent";
import { motion, AnimatePresence } from "framer-motion";

export const Widget = ({
  position = "bottom-right",
  buttonText = "Open Widget",
  title = "Widget Title",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const positionStyles = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  return (
    <div className={`fixed ${positionStyles[position]} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <WidgetContent onClose={() => setIsOpen(false)} title={title} />
          </motion.div>
        )}
      </AnimatePresence>

      <WidgetButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        text={buttonText}
      />
    </div>
  );
};
