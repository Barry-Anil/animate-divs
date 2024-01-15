import React from "react";
import ReactDOMClient from "react-dom/client";
import { Focus } from "./screens/Focus";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Focus />);
