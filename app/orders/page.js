"use client";
// components
import Layout from "@/components/Layout/Layout";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// React
import React, { useEffect, useState } from "react";
// styles
import styles from "../../styles/orders/orders.module.css";
// functions
import { getAllOrders } from "@/functions/store";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAllOrders(setOrders);
  }, []);

  return (
    <Layout>
      <div className={styles.ordersContainer}>
        <div className={styles.listContainer}>
          <div className={styles.orderList}>
            {orders.length ? (
              orders?.map((order) => {
                return (
                  <div key={order?.id} className={`${styles.orderCard}`}>
                    <div className={styles.orderFlagContainer}>
                      <div
                        className={styles.orderFlag}
                        style={{
                          backgroundColor:
                            order.status === "Done" ? "#028f02" : "#ddd",
                        }}
                      ></div>
                    </div>
                    <div className={styles.infoRow}>
                      <div className={styles.orderID}>Order ID #{order.id}</div>
                      <div className={styles.userName}>
                        Username: {order.user.name}
                      </div>
                      <div className={styles.productTitle}>
                        Product Title: {order.product.title}
                      </div>
                      <div className={styles.orderTitle}>{order.status}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No Orders</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
