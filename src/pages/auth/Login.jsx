import { FaRegCircleUser } from "react-icons/fa6";
import LoginForm from "../../components/Login/LoginForm";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[user, navigate])

  return (
    <div className="bg-[rgb(10,_13,_18)] pb-10">
      <div className="text-center pt-20">
        <FaRegCircleUser color="white" className="text-6xl mx-auto" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
