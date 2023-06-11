import React from "react";
import ReactDOM from "react-dom/client";
import DemoOne from "./views/DemoOne";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DemoOne title="nihao">
      <span slot="header ">我是页眉</span>
      <h1 slot="footer">我是页脚</h1>
    </DemoOne>
);




reportWebVitals();
