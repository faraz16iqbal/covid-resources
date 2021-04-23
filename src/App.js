/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import Home from "./screens/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Region from "./screens/Region";
function App() {
  return (
    <>
      <Router>
        <Route path="/:id" component={Region} />
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
