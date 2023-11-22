import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="card-body max-w-md mx-auto">
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
      </div>
    </form>
  );
};

export default LoginForm;
