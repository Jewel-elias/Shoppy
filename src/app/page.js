"use client";
import React from "react";
import styles from "../styles/login/login.module.css";
import Shopping from "../assets/shopping.webp";
// *** Next
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loginform from "@/src/components/Login/Loginform";
import Signupform from "@/src/components/Login/Signupform";
import { login, signup } from "@/src/functions/auth";

export default function Login() {
  const router = useRouter();
  const toSignUp = () => {
    // Display
    document.getElementById("LoginForm").style.height = "0";
    document.getElementById("SignupForm").style.height = "auto";
    // Opacity (because CSS3 doesn't support transition for display property)
    document.getElementById("LoginForm").style.opacity = "0";
    document.getElementById("SignupForm").style.opacity = "1";
  };
  const toLogin = () => {
    // Display
    document.getElementById("LoginForm").style.height = "auto";
    document.getElementById("SignupForm").style.height = "0";
    // Opacity (because CSS3 doesn't support transition for display property)
    document.getElementById("LoginForm").style.opacity = "1";
    document.getElementById("SignupForm").style.opacity = "0";
  };

  return (
    <div className={styles.LoginPage}>
      <div className={`shadow-lg ${styles.LoginBox}`}>
        <div className={styles.flipBackInner}>
          <div className={styles.LoginForm} id="LoginForm">
            {/* Logo */}
            <div className={styles.Logo}>
              S<span>hoppy</span>
            </div>
            <div className={styles.HeaderForm}>Welcome Back</div>
            {/* Login form */}
            <Loginform
              login={(e) => login(e, router)}
              styles={styles}
              toSignUp={toSignUp}
            />
          </div>
          <div className={styles.SignupForm} id="SignupForm">
            <div className={styles.HeaderForm}>Sign Up</div>
            {/* Sign Up form */}
            <Signupform
              signup={(e) => signup(e, router)}
              styles={styles}
              toLogin={toLogin}
            />
          </div>
        </div>
        <div className={styles.LoginImage}>
          <Image
            src={Shopping}
            alt="Shopping"
            width={650}
            // height={348}
            className={styles.loginImageComponent}
            priority
          />
        </div>
      </div>
    </div>
  );
}
