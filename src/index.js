import React from "react";
import ReactDOM from "react-dom/client";
import DemoOne from "./views/DemoOne";
import reportWebVitals from "./reportWebVitals";
import Vote from "./components/Vote";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Vote title="react还是很好学的"></Vote>
  </>
);

console.log(React.createElement(Vote,{title: 'react还是很好学的'}));

reportWebVitals();
