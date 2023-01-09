import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Error = () => (
  <div>
    Ruh roh, there was an Error!{" "}
    <Link to="/">
      <Button>Go back!</Button>
    </Link>
  </div>
);

export default Error;
