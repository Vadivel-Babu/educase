import { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";

const LoginPage = () => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold">Signin to your PopX account</h1>
      <p className="text-gray-400 my-2">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>
      <div className="space-y-4 my-4">
        <InputBox
          label={"Email address"}
          type="email"
          value={credential.email}
          placeholder="Enter email address"
          name="email"
          required={false}
          handleChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
        />
        <InputBox
          label="Password"
          type="password"
          value={credential.password}
          placeholder="Enter your password"
          name="password"
          required={false}
          handleChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
        />
      </div>
      <Button disabled variant="disabled">
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
