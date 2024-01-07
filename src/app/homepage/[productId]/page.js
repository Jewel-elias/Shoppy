"use client";
// Styles
import styles from "../../../styles/homepage/homepage.module.css";
// React
import React, { useEffect, useState } from "react";
// Next
import Image from "next/image";
// Components
import CommentBox from "@/src/components/Homepage/CommentBox";
import Layout from "@/src/components/Layout/Layout";
// Functions
import { getProduct } from "@/src/functions/store";
import CommentInput from "@/src/components/Homepage/CommentInput";

export default function Page({ params }) {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(setProduct, params);
  }, []);

  if (!product) return;
  return (
    <Layout>
      <div className={styles.infoContainer}>
        <div className={styles.firstCol}>
          <div className={styles.infopageLabel}>
            <span>Info of Product #{params.productId}</span>
          </div>
          <div className={styles.cardBox}>
            <div className={styles.cardImageCol}>
              <Image
                src={product.image}
                alt={`img${product.id}`}
                width={300}
                height={300}
                priority
              />
            </div>
            <div className={styles.cardInfoCol}>
              <div className="card-body">
                <h5 className={styles.cardInfoTitle}>{product.title}</h5>
                <p className={`card-text ${styles.cardInfoDescription} mt-4`}>
                  {product.description}
                </p>
                <p className="card-text mt-5">
                  <span className={styles.starIcon}>⭐</span>
                  <span className={styles.starIcon}>⭐</span>
                  <span className={styles.starIcon}>⭐</span>
                  <span className={styles.starIcon}>⭐</span>
                  <span className={styles.starIcon}>⭐</span>
                  {/* rated by: */}
                  {/* <small className="text-muted">{product.rate}</small> */}
                  <small className="text-muted p-3">
                    {Math.round(product.rate * 100) / 100}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.infopageLabel}>
            <span>Comments on Product #{params.productId}</span>
          </div>
          <div className={styles.commentsListContainer}>
            <div className={styles.commentsList}>
              {product.comments.length ? (
                product.comments.map((comment) => {
                  return <CommentBox comment={comment} styles={styles} />;
                })
              ) : (
                <div>No Comments</div>
              )}
            </div>
            <CommentInput styles={styles} product_id={product.id} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
