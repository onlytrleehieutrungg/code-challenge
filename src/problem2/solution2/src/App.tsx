import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sln1Component from "./pages/solutionOne";
import Sln3Component from "./pages/solutionThree";
import Sln2Component from "./pages/solutionTwo";
import HomePage from "./pages/homePage";
import ResponsiveAppBar from "./layouts/header";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution1" element={<Sln1Component />} />
          <Route path="/solution2" element={<Sln2Component />} />
          <Route path="/solution3" element={<Sln3Component />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
