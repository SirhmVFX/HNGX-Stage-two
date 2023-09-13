import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SingleMovie from "./pages/SIngleMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
