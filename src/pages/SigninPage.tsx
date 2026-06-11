import { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [credential, setCredential] = useState({
    fullname: "",
    number: "",
    email: "",
    password: "",
    company: "",
  });
  const [selected, setSelected] = useState("yes");
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold">Create your PopX account</h1>
      <div className="space-y-4 my-4">
        <InputBox
          label={"Full name"}
          type="text"
          value={credential.email}
          placeholder="Enter full name"
          name="fullname"
          required={true}
          handleChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
        />
        <InputBox
          label={"Phone number"}
          type="text"
          value={credential.email}
          placeholder="Enter phone number"
          name="number"
          required={true}
          handleChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
        />
        <InputBox
          label={"Email address"}
          type="email"
          value={credential.email}
          placeholder="Enter email address"
          name="email"
          required={true}
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
          required={true}
          handleChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
        />
        <InputBox
          label={"company name"}
          type="text"
          value={credential.email}
          placeholder="Enter company name"
          name="company"
          required={false}
          handleChange={(e) =>
            setCredential({ ...credential, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="" className=" capitalize text-sm">
          Are you an Agency? <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-6  p-3 w-fit">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="choice"
              value="yes"
              checked={selected === "yes"}
              onChange={(e) => setSelected(e.target.value)}
              className="h-5 w-5 accent-primary"
            />
            <span className="text-md">Yes</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="choice"
              value="no"
              checked={selected === "no"}
              onChange={(e) => setSelected(e.target.value)}
              className="h-5 w-5 accent-primary"
            />
            <span className="text-md">No</span>
          </label>
        </div>
      </div>
      <Button onClick={() => navigate("/profile")}>Create Account</Button>
    </div>
  );
};

export default SigninPage;
