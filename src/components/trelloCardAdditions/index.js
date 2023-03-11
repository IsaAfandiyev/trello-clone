import styles from "./index.module.css";
import commentIcon from "../../assets/icons/comment-solid.svg";
import paperClipIcon from "../../assets/icons/paperclip-solid.svg";
function TrelloCardAdditions() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <button className={styles.cardAddBtn}>+</button>
        </div>
        <div className={styles.left}>
          <div className={styles.comment}>
            <img
              src={commentIcon}
              alt="Comment"
              className={styles.commentIcon}
            />
            <p className={styles.commentText}>5</p>
          </div>
          <div className={styles.attachedFiles}>
            <img
              src={paperClipIcon}
              alt=""
              className={styles.attachedFilesIcon}
            />
            <p className={styles.attachedFilesText}>3</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrelloCardAdditions;
