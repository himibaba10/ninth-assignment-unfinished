import { FaRegCircleUser } from "react-icons/fa6";
import LoginForm from "../../components/Login/LoginForm";

const Login = () => {
  return (
    <div className="bg-[rgb(10,_13,_18)]">
      <div className="text-center pt-20">
        <FaRegCircleUser color="white" className="text-6xl mx-auto" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
