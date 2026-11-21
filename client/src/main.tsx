import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// T14: fontul semnăturii, găzduit local (nu de pe Google Fonts)
import "@fontsource/dancing-script/latin-400.css";

createRoot(document.getElementById("root")!).render(<App />);
