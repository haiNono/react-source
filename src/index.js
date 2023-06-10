import React from "react";
import ReactDOM from "react-dom/client";
import DemoOne from "./views/DemoOne";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DemoOne title="nihao">
      <span>哈哈哈</span>
      <h1>GOOD</h1>
    </DemoOne>
);

console.log(React.createElement(DemoOne));



reportWebVitals();
