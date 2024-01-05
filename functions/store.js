import axios from "axios";
import { BASE_URL } from "@/constants";

export const getProduct = (setProduct, params) => {
  if (typeof window !== "undefined" && params.productId) {
    axios
      .get(BASE_URL + `/api/products/${params.productId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("token-shoppy")
          )}`,
        },
      })
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data, "lll");
      })
      .catch((err) => console.error(err));
  }
};
export const getAllProducts = (setProducts) => {
  if (typeof window !== "undefined") {
    axios
      .get(BASE_URL + "/api/products", {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("token-shoppy")
          )}`,
        },
      })
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error(err));
  }
};
export const getFilteredProducts = (setProducts, nameFilter, rateFilter) => {
  axios
    .post(
      BASE_URL + "/api/filter-products",
      {
        title: nameFilter,
        rate: rateFilter,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("token-shoppy")
          )}`,
        },
      }
    )
    .then((res) => {
      setProducts(res.data.data);
    })
    .catch((err) => console.error(err));
};

export const getAllOrders = (setOrders) => {
  if (typeof window !== "undefined") {
    axios
      .get(BASE_URL + "/api/orders", {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("token-shoppy")
          )}`,
        },
      })
      .then((res) => setOrders(res.data.data))
      .catch((err) => console.error(err));
  }
};
