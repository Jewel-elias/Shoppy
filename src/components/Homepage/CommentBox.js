import Image from "next/image";
import React from "react";

export default function CommentBox({ comment, styles }) {
  return (
    <div key={comment.id} className={styles.commentBox}>
      <div className={styles.commentImg}>
        <Image
          src={"https://placehold.co/75x75/png"}
          alt={`img${comment.id}`}
          width={75}
          height={75}
          priority
        />
      </div>
      <div className={styles.commentBody}>
        <div className={styles.spaceBetween}>
          <div className={styles.commentName}>{comment.user.name}</div>
        </div>
        <div className={styles.commentText}>{comment.content}</div>
      </div>
    </div>
  );
}
