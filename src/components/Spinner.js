import React from "react";
import { Spinner, Button } from "react-bootstrap";

const Spin = () => {
  return (
    <div>
      <Button
        variant="success"
        disabled
        style={{ width: "12rem", height: "5rem", fontSize: "1.5rem" }}
      >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          style={{ width: "1.5rem", height: "1.5rem" }}
          className="mr-2"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Spin;
