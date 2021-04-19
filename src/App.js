/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import Home from "./screens/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Region from "./screens/Region";
import { Card } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Route path="/:id" component={Region} />
        <Route exact path="/" component={Home} />
      </Router>
      <Card className="mt-4">
        <Card.Body>
          <blockquote className="blockquote mb-0 text-center">
            <p>
              {" "}
              In case you want to lend a helping hand or have verified resouces,
              you can reach out to me via{" "}
              <div className="foot">
                <li>
                  <a
                    className="foot"
                    href="mailto:faraziqbal2001@gmail.com"
                    target="_blank"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    className="foot"
                    href="https://instagram.com/faraziqbaal"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </div>
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
