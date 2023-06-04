// import React, { Children } from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import { render, createElement } from "./utils/jsxHandler";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//       <h2 className="class"></h2>
//       <button style={{color:'red'}}>nihao</button>
//     </div>
// );

const vDom = createElement(
  "div",
  null,
  createElement("h2", { className: "class" }, "hoibao"),
  createElement("button", { style:{
    color: 'red'
  } }, 10),
);
render(vDom, document.getElementById("root"));

reportWebVitals();
