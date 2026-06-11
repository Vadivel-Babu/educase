import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col justify-end p-4">
      <div>
        <h1 className="text-2xl font-bold">Welcome to PopX</h1>
        <p className="text-gray-400 my-2">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
        <Button onClick={() => navigate("/signin")} variant="primary">
          create account
        </Button>
        <Button onClick={() => navigate("/login")} variant="secondary">
          already register? login
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
