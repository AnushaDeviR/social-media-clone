import ReactDOM from "react-dom/client";
import App from "./App";

// NOTE: `!` refers to null in TS
ReactDOM.createRoot(document.getElementById('root')!).render(
    <App/>
)