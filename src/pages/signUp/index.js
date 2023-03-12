import React, { useCallback } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./bootstrap.css";
import "./index.css";
import { Link } from "react-router-dom";
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await createUserWithEmailAndPassword(
          getAuth(),
          email.value,
          password.value
        );
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    // <div className={styles.container}>
    //   <h1 className={styles.header}>Sign up for your account</h1>
    //   <form onSubmit={handleSignUp} className={styles.form}>
    //     <label className={styles.emailLabel}>
    //       Email
    //       <input
    //         name="email"
    //         type="email"
    //         placeholder="Email"
    //         className={styles.emailInput}
    //       />
    //     </label>
    //     <label className={styles.passwordLabel}>
    //       Password
    //       <input
    //         name="password"
    //         type="password"
    //         placeholder="Password"
    //         className={styles.passwordInput}
    //       />
    //     </label>
    //     <button type="submit" className={styles.signUpBtn}>
    //       Sign Up
    //     </button>
    //   </form>
    // </div>
    <main className="formSignIn">
      <form onSubmit={handleSignUp}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
        <button
          className="w-100 btn btn-lg btn-primary signinBtn"
          type="submit"
        >
          Sign in
        </button>
        <Link
          to="/login"
          preventScrollReset={true}
          style={{ cursor: "pointer" }}
          className="loginBtn"
        >
          i have account
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
