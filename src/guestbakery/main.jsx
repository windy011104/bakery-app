import { createRoot } from "react-dom/client";
import './tailwind.css';
import BakeryMenuList from "./BakeryMenuList";
import BakeryMenuSearchFilter from "./BakeryMenuSearchFilter";


createRoot(document.getElementById("root")).render(
  // <BakeryMenuList/>
  <BakeryMenuSearchFilter/>
);
