import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import Home from "./pages/Home";
import Layout from "./components/UI/Layout";
import Page404 from "./pages/Page404";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="country/:cca3" element={<Country />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
