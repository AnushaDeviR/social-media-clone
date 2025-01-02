import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'

import App from "./App";

// NOTE: `!` refers to null in TS
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)