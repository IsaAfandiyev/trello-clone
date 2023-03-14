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
      console.log(e)
    }

    setLoading(false);
  }

  return (
    <main className="formSignIn">
      <form onSubmit={handleFormSubmit}>
        <h1 className="h3 mb-3 fw-normal"> Login to your account</h1>
        <div className="form-floating">
          <input
            id="floatingInput"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
             className="form-control"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            id="floatingPassword"

                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
            className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-100 btn btn-lg btn-primary loginBtn"
                >
                  Login
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
