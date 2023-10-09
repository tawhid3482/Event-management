import swal from "sweetalert";
import UseHook from "../CustomHook/UseHook";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const location = useLocation()
  console.log(location)
  const Navigate =useNavigate()
  const { googleLogin, loginbyEmail } = UseHook();

  const handlelogin = (media) => {
    media();
    swal("Good Job", "Successfully Your are logined", "success");
    Navigate('/')
  };
  const handleloginwithEmail = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    loginbyEmail(email, password)
      .then((res) => {
        console.log(res.user);
        Navigate(location?.state ? location.state : '/')
        window.location.reload()
        swal("Good Job", "Successfully Your are logined", "success");
      })
      .catch((error) => {
        swal("Sorry", "Something wrong", "error");
      });
  };
  return (
    <div>
      <div className="hero   bg-base-200">
        <div className="hero-content flex-col mb-5">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
            <form onSubmit={handleloginwithEmail} className=" card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-blue-500 hover:text-white">login</button>
              </div>
            </form>
            <div className="text-center">
              <p>
                You are new here?{" "}
                <Link className="text-red-600" to="/register">
                  Register
                </Link>
              </p>
            </div>
            <div className="mb-2 flex justify-center gap-2 items-center">
              <hr className="border-2 border-gray-300 w-60" />
              <span className="text-2xl ">Or</span>
              <hr className="border-2 border-gray-300 w-60" />
            </div>
            <div className="mb-5 text-center">
              <button
                onClick={() => handlelogin(googleLogin)}
                className="btn rounded-3xl "
              >
                <FcGoogle className="text-2xl"></FcGoogle>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
