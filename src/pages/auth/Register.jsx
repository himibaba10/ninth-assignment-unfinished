import { FaRegCircleUser } from "react-icons/fa6";
import RegisterForm from "../../components/Register/RegisterForm";

const Register = () => {
  return (
    <div className="bg-[rgb(10,_13,_18)]">
      <div className="text-center pt-20">
        <FaRegCircleUser color="white" className="text-6xl mx-auto" />
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
