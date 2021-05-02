/* eslint-disable react/jsx-no-target-blank */
import Home from "./screens/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Region from "./screens/Region";
import MentalHealth from "./screens/MentalHealth";

function App() {
  return (
    <>
      <Router>
        <Route path="/state/:id" component={Region} />
        <Route exact path="/mentalhealth" component={MentalHealth} />
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
