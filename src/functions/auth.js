import axios from "axios";
import { BASE_URL } from "../constants";


export const login = async (e, router) => {
  e.preventDefault();
  // .post(BASE_URL + `/api/login`, params, {headers:{}})
  await axios
    .post(BASE_URL + `/api/login`, {
      email: document.getElementById("emailLogin").value,
      password: document.getElementById("passwordLogin").value,
    })
    .then((res) => {
      localStorage.setItem("token-shoppy", JSON.stringify(res.data.data.token));
      localStorage.setItem("logged-user", JSON.stringify(res.data.data));

      router.push("/homepage", { scroll: true });
    })
    .catch((err) => {
      alert("Error Username or Password");
    });
};
export const signup = async (e, router) => {
  e.preventDefault();
  await axios
    .post(BASE_URL + `/api/register`, {
      name: document.getElementById("nameSignup").value,
      email: document.getElementById("emailSignup").value,
      password: document.getElementById("passwordSignup").value,
      c_password: document.getElementById("confirmPasswordSignup").value,
    })
    .then((res) => {
      toLogin();
    })
    .catch((err) => {
      alert(
        err?.response?.data?.data?.error
          ? err?.response?.data?.data?.error
          : "Error Registeration"
      );
    });
};
