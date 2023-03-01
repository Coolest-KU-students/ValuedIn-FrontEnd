import React from "react";
import {createRoot} from "react-dom/client";
import JobFeed from "./JobFeed";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<JobFeed />, div);
});