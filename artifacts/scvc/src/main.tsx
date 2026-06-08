import { createRoot } from "react-dom/client";
import gsap from "gsap";
import App from "./App";
import "./index.css";

// Prevent GSAP from compensating for dropped frames with a large delta jump,
// which causes visible position "snapping" during quick scrolls on mobile.
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")!).render(<App />);
