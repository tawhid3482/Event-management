import { Link, useNavigate } from "react-router-dom";
import UseHook from "../CustomHook/UseHook";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate()
  const { createUserByEmail, googleLogin, userinfo } = UseHook();

  const handlelogin = (media) => {
    media();
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo")
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      swal("Sorry", "your password must be 6 charecter", "error");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal("Sorry", "your password must be one UpperCase letter", "error");
      return;
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      swal(
        "Sorry",
        "Your password must contain at least one special character",
        "error"
      );

      return;
    }

    createUserByEmail(email, password)
      .then((res) => {
        console.log(res.user);
        userinfo(name,photo).then(() => {
          swal("Good Job", "Successfully Created Account", "success");
         navigate('/')
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="text-center p-5 bg-base-200">
      <div className="text-center ">
        <h2 className="text-3xl text-center  mb-0">Create an account</h2>
        <form
          onSubmit={handleRegister}
          className="card-body lg:w-1/2 md:w-2/3 mx-auto "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="input input-bordered text-black  text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered text-black  text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Username or Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered text-black"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
      </div>
      <div className="mb-2 flex justify-center gap-2 items-center">
        <hr className="border-2 border-gray-300 w-60" />
        <span className="text-2xl ">Or</span>
        <hr className="border-2 border-gray-300 w-60" />
      </div>
      <div className="mb-5">
        <button
          onClick={() => handlelogin(googleLogin)}
          className="btn rounded-3xl "
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
