import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import GoogleLogin from "../shared/GoogleLogin";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const {createUser, setUser} = useContext(AuthContext);

  const handleFormSubmit = e => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z!@#$%^&*()_+]{6,}$/;
    if(!passwordRegex.test(password)){
      setError("Password should be at least 6 letters, should contain at least 1 uppercase and 1 special character!");
      return;
    }

    createUser(email,password)
    .then(res => {
      updateProfile(res.user, {
        displayName: name
      })
      .then(()=>{
        setUser(res.user);
      })
    })
    .catch(err => {
      console.log(err.message);
    })
  };

  return (
    <form onSubmit={handleFormSubmit} className="card-body max-w-md mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg text-white font-poppins">
            Name
          </span>
        </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="input input-bordered rounded"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg text-white font-poppins">
            Email
          </span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered rounded"
          name="email"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg text-white font-poppins">
            Password
          </span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered rounded"
          name="password"
          required
        />
        <label className="label">
          <Link
            to="/login"
            className="label-text-alt link no-underline font-poppins text-white hover:!text-white text-base"
          >
            Already Have an Account?{" "}
            <span className="text-[#FF4444] underline underline-offset-4">
              Login Now
            </span>
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-[#FF4444] border-0 text-white font-poppins text-lg font-medium hover:bg-white hover:text-black">
          Register
        </button>
        <div className="text-white font-poppins text-sm mt-2">{error}</div>
      </div>
      <GoogleLogin/>
    </form>
  );
};

export default RegisterForm;
