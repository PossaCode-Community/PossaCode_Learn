import React from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
// const element = React.createElement(
//   "div",
//   {
//     style: {
//       color: "red",
//       backgroundColor: "blue",
//     },
//   },
//   React.createElement(
//     "p",
//     {
//       style: {
//         color: "green",
//         backgroundColor: "yellow",
//       },
//     },
//     "Je suis un paragraphe !"
//   )
// );

const element = (
  <div style={{ color: "red", backgroundColor: "blue" }}>
    <p style={{ color: "green", backgroundColor: "yellow" }}>
      Je suis un paragraphe !
    </p>
  </div>
);

createRoot(root).render(element);
