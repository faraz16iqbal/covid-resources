/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Alert } from "react-bootstrap";
const CardComp = () => {
  return (
    <Alert variant="success" className="mt-4">
      <blockquote className="blockquote mb-0 text-center">
        <p>
          {" "}
          In case you want to lend a helping hand or have verified resouces, you
          can reach out to Faraz Iqbal via{" "}
        </p>

        <div className="foot">
          <li>
            <a
              className="foot"
              href="https://instagram.com/faraziqbaal"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="foot"
              href="https://www.linkedin.com/in/faraz-iqbal-a9252518b/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </div>
      </blockquote>
    </Alert>
  );
};

export default CardComp;
