import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLogin from "../shared/GoogleLogin";

const LoginForm = () => {
  const [error, setError] = useState("");

  const {signInUser, setUser} = useContext(AuthContext);

  const handleFormSubmit = e => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
    .then(res => {
      setUser(res.user);
    })
    .catch(() => {
        setError("Email or password doesn't match")
    })
  }

  return (
    <form onSubmit={handleFormSubmit} className="card-body max-w-md mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg text-white font-poppins">
            Email
          </span>
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="input input-bordered rounded"
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
          name="password"
          placeholder="password"
          className="input input-bordered rounded"
          required
        />
        <label className="label">
          <Link
            to="/register"
            className="label-text-alt link no-underline font-poppins text-white hover:!text-white text-base"
          >
            Don&apos;t Have an Account?{" "}
            <span className="text-[#FF4444] underline underline-offset-4">
              Register Now
            </span>
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-[#FF4444] border-0 text-white font-poppins text-lg font-medium hover:bg-white hover:text-black">
          Login
        </button>
        <div className="text-white font-poppins text-sm mt-2">{error}</div>
      </div>
      <GoogleLogin/>
    </form>
  );
};

export default LoginForm;
