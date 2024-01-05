"use client";
// Styles
import styles from "../../../styles/homepage/homepage.module.css";
// React
import React, { useEffect, useState } from "react";
// Next
import Image from "next/image";
// Components
import Layout from "@/components/Layout/Layout";
import CommentBox from "@/components/Homepage/CommentBox";
// Functions
import { getProduct } from "@/functions/store";

export default function Page({ params }) {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(setProduct, params);
  }, []);

  if (!product) return;
  return (
    <Layout>
      <div className={styles.infoContainer}>
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
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <span className={styles.starIcon}>⭐</span>
                rated by:
                <small className="text-muted">{product.rate}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.infopageLabel}>
          <span>Comments on Product #{params.productId}</span>
        </div>
        <div className={styles.commentsList}>
          {product.comments.length ? (
            product.comments.map((comment) => {
              return <CommentBox comment={comment} styles={styles} />;
            })
          ) : (
            <div>No Comments</div>
          )}
        </div>
      </div>
    </Layout>
  );
}
