import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import SingleCocktail from "./components/SingleCocktail";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/singlecocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </>
  );
}

export default App;
