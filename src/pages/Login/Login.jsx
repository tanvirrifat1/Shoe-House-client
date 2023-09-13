import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

import img from "../../assets/others/authentication.gif";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidationCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Time-Square | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <h1 className="text-3xl text-center ">Login Here</h1>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
              <figure className="">
                <img className="h-[520px]" src={img} alt="" />
              </figure>
            </div>
            <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    ref={captchaRef}
                    name="captcha"
                    placeholder="text the captcha"
                    className="input input-bordered"
                  />
                  <button
                    onClick={handleValidationCaptcha}
                    className="btn btn-outline btn-xs btn-success mt-2"
                  >
                    Validation
                  </button>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline btn-success"
                    type="submit"
                    disabled={disable}
                    value="Login"
                  />
                </div>
                <div className="btn btn-outline btn-accent">
                  <FcGoogle className="text-3xl" />
                </div>
                <p className="my-2">
                  New Here?
                  <Link to="/signup">
                    <a className="link link-primary"> Create an account</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
