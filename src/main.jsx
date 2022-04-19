import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="link1" element={<h1>link1</h1>} />
        <Route path="link2" element={<h1>link2</h1>} />
        <Route path="*" element={<NoMatch/>} />
    
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
