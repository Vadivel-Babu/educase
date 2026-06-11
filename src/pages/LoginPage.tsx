import React from "react";
import Button from "../components/Button";

const LoginPage = () => {
  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold">Signin to your PopX account</h1>
      <p className="text-gray-400 my-2">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>
      <Button disabled variant="disabled">
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
