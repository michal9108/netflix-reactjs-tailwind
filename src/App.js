import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Domov from "./pages/Domov";

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Domov />} />
    </Routes>
    </>
  );
}

export default App;
