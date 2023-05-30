import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import View from "./Components/Pages/View";
import Add from "./Components/Pages/Add";
import Edit from "./Components/Pages/Edit";
import Navbar from "./Components/Pages/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<View />} />
            <Route exact path="/edit/:id" element={<Edit />} />
            <Route exact path="/add" element={<Add />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
