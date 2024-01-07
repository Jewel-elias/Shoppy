import React from "react";

export default function Signupform({ signup, styles, toLogin }) {
  return (
    <form onSubmit={signup}>
      <div className="form-group mb-3">
        <label for="nameSignup" className={styles.LabelForm}>
          Name
        </label>
        <input
          required
          type="name"
          className="form-control"
          id="nameSignup"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group mb-3">
        <label for="emailSignup" className={styles.LabelForm}>
          Email address
        </label>
        <input
          required
          type="email"
          className="form-control"
          id="emailSignup"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group mb-3">
        <label for="passwordSignup" className={styles.LabelForm}>
          Password
        </label>
        <input
          required
          type="password"
          className="form-control"
          id="passwordSignup"
          placeholder="Password"
        />
      </div>
      <div className="form-group mb-3">
        <label for="confirmPasswordSignup" className={styles.LabelForm}>
          Confirm Password
        </label>
        <input
          required
          type="password"
          className="form-control"
          id="confirmPasswordSignup"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className={`btn btn-primary w-100 ${styles.loginBtn}`}
      >
        Sign Up
      </button>
      <div className={`form-group mb-4 ${styles.noAccount}`}>
        <span>Already have an account?</span>
        <a href="#" className={styles.link} onClick={toLogin}>
          Login
        </a>
      </div>
    </form>
  );
}
