import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import DemoOne from "./views/DemoOne";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DemoOne/>
);



reportWebVitals();
