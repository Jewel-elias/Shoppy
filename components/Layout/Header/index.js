"use client";
import React from "react";
import styles from "../../../styles/header/header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleSignout = () => {
    localStorage.removeItem("logged-user");
    localStorage.removeItem("token-shoppy");
    router.push(`/login`, { scroll: true });
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light shadow-sm ${styles.navContainer}`}
    >
      <a className="navbar-brand" href="#">
        <div className={styles.Logo}>
          S<span>hoppy</span>
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${styles.navLinks}`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">
            Home
          </a>
          <a className="nav-item nav-link" href="/orders">
            Orders
          </a>
          <a className="nav-item nav-link" href="#">
            About Us
          </a>
        </div>
        <div>
          {typeof window !== "undefined" &&
            (JSON.parse(localStorage.getItem("logged-user")) ? (
              <div className={styles.userName} onClick={handleSignout}>
                <span>
                  {JSON.parse(localStorage.getItem("logged-user")).name}
                </span>
                <span>(Signout)</span>
              </div>
            ) : (
              <button
                type="button"
                className={`btn btn-primary w-100 ${styles.loginBtn}`}
              >
                <Link href="/login">Login</Link>
              </button>
            ))}
        </div>
      </div>
    </nav>
  );
}
