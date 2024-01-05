"use client";
// components
import Layout from "@/components/Layout/Layout";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// React
import React, { useEffect, useState } from "react";
// styles
import styles from "../../styles/homepage/homepage.module.css";
// functions
import { getAllProducts, getFilteredProducts } from "@/functions/store";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [nameFilter, setnameFilter] = useState("");
  const [rateFilter, setrateFilter] = useState();
  const router = useRouter();

  const handleFilter = (e) => {
    e.preventDefault();
    if (nameFilter === "" && rateFilter === "") {
      getAllProducts(setProducts);
    } else {
      getFilteredProducts(setProducts, nameFilter, rateFilter);
    }
  };

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  return (
    <Layout>
      <div className={styles.productsContainer}>
        <div className={styles.filterContainer}>
          <div className={styles.filtersList}>
            <div className={styles.filtersLabel}>Filter by:</div>
            <form className={styles.filterForm} onSubmit={handleFilter}>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Search for title"
                  onChange={(e) => setnameFilter(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="rate"
                  placeholder="rate"
                  onChange={(e) => setrateFilter(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-secondary ${styles.filterBtn}`}
              >
                Filter
              </button>
            </form>
          </div>
        </div>
        <div className={styles.listContainer}>
          <div className={styles.productList}>
            {products.length ? (
              products?.map((product) => {
                return (
                  <div
                    key={product?.id}
                    className={`${styles.productCard}`}
                    onClick={() => {
                      router.push(`/homepage/${product?.id}`, { scroll: true });
                    }}
                  >
                    <div className={styles.starBox}>
                      <div className={styles.productRate}>
                        <span>{Math.round(product.rate * 100) / 100}</span>{" "}
                        <span className={styles.starIcon}>⭐</span>
                      </div>
                    </div>
                    <div className={styles.imageStyle}>
                      <Image
                        src={product.image}
                        alt={`img${product.id}`}
                        width={150}
                        height={150}
                        // layout="responsive"
                        priority
                      />
                    </div>
                    <div className={styles.infoRow}>
                      <div className={styles.productTitle}>{product.title}</div>
                    </div>
                    {/* <div className={styles.starRow}>
                    <div className={styles.productRate}>
                      <span>{Math.round(product.rate * 100) / 100}</span>{" "}
                      <span>⭐</span>
                    </div>
                  </div> */}
                  </div>
                );
              })
            ) : (
              <div>No Products</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
