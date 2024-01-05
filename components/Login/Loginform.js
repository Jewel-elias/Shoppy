import React from "react";

export default function Loginform({ login, styles, toSignUp }) {
  return (
    <form onSubmit={login}>
      <div className="form-group mb-4">
        <label for="emailLogin" className={styles.LabelForm}>
          Email address
        </label>
        <input
          required
          type="email"
          className="form-control"
          id="emailLogin"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group mb-2">
        <label for="passwordLogin" className={styles.LabelForm}>
          Password
        </label>
        <input
          required
          type="password"
          className="form-control"
          id="passwordLogin"
          placeholder="Password"
        />
      </div>
      <div className={`form-group mb-4 ${styles.forgotPass}`}>
        <a href="#" className={styles.link}>
          forgot password
        </a>
      </div>
      <button
        type="submit"
        className={`btn btn-primary w-100 ${styles.loginBtn}`}
        // onClick={login}
      >
        Login
      </button>
      <div className={`form-group mb-4 ${styles.noAccount}`}>
        <span>Don't have an account?</span>
        <a href="#" className={styles.link} onClick={toSignUp}>
          Sign Up
        </a>
      </div>
    </form>
  );
}
