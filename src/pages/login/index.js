import React, { useEffect, useState } from "react";
import { useAuth } from "../../Auth";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, login, setError } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError("Failed to login");
    }

    setLoading(false);
  }

  return (
    // <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
    //         Login to your account
    //       </h2>
    //     </div>
    //     <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <input
    //             id="email-address"
    //             name="email"
    //             type="email"
    //             autoComplete="email"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
    //             placeholder="Email address"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             autoComplete="current-password"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 rounded-t-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:z-10 sm:text-sm"
    //             placeholder="Password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <button
    //           type="submit"
    //           disabled={loading}
    //           className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
    //         >
    //           Login
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <main className="formSignIn">
      <form onSubmit={handleFormSubmit}>
        <h1 className="h3 mb-3 fw-normal"> Login to your account</h1>
        <div className="form-floating">
          <input
            name="email"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary loginBtn" type="submit">
          Sign in
        </button>
        <Link
          to="/signup"
          preventScrollReset={true}
          style={{ cursor: "pointer" }}
          className="loginBtn"
        >
          Dont have account?
        </Link>
      </form>
    </main>
  );
}
