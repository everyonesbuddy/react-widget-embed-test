import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Widget initialization function
function initWidget(config = {}) {
  const widgetRoot = document.createElement("div");
  widgetRoot.id = "react-widget-root";
  document.body.appendChild(widgetRoot);

  const root = createRoot(widgetRoot);
  root.render(<App {...config} />);
}

// Export for UMD bundle
export { initWidget };

// Auto-initialize if window.WIDGET_CONFIG exists
if (typeof window !== "undefined" && window.WIDGET_CONFIG) {
  initWidget(window.WIDGET_CONFIG);
}
