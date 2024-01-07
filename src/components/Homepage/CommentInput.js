import { addComment } from "@/src/functions/store";
import Image from "next/image";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";

export default function CommentInput({ styles, product_id }) {
  const handleComment = (e) => {
    e.preventDefault();
    addComment(e, product_id, document.getElementById("comment").value);
  };
  return (
    <div className={` ${styles.commentInputContainer}`}>
      <div className={styles.commentImg}>
        <Image
          src={"https://placehold.co/75x75/png"}
          // alt={`img${comment.id}`}
          width={75}
          height={75}
          priority
        />
      </div>
      <form onSubmit={handleComment} className={styles.commentInputBody}>
        <input
          required
          type="text"
          className="form-control"
          id="comment"
          placeholder="Write your comment.."
        />
        <button
          type="submit"
          className={`btn w-10 ${styles.commentBtn}`}
          // onClick={login}
        >
          <AiOutlineSend />
        </button>
      </form>
      {/* <div className={styles.commentBody}>
        <div className={styles.spaceBetween}>
          <div className={styles.commentName}>{"comment.user.name"}</div>
        </div>
        <div className={styles.commentText}>{"comment.content"}</div>
      </div> */}
    </div>
  );
}
