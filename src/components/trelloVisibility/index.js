import styles from "./index.module.css";
import lockImg from "../../assets/icons/lock-solid.svg";
function TrelloVisibility() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.visibility}>
            <img src={lockImg} alt="lock" className={styles.lockImg} />
            <p className={styles.visibilityText}>Private</p>
          </div>
          <div className={styles.profiles}>
            <img
              src="https://www.picclickimg.com/uOoAAOSwF3Vc2xOY/Paddington-teddy-bear-painting-CANVAS-PICTURE-WALL-ART.webp"
              alt="profile picture"
              className={styles.profilesImg}
            />
            <img
              src="https://www.picclickimg.com/uOoAAOSwF3Vc2xOY/Paddington-teddy-bear-painting-CANVAS-PICTURE-WALL-ART.webp"
              alt="profile picture"
              className={styles.profilesImg}
            />
            <img
              src="https://www.picclickimg.com/uOoAAOSwF3Vc2xOY/Paddington-teddy-bear-painting-CANVAS-PICTURE-WALL-ART.webp"
              alt="profile picture"
              className={styles.profilesImg}
            />
            <img
              src="https://www.picclickimg.com/uOoAAOSwF3Vc2xOY/Paddington-teddy-bear-painting-CANVAS-PICTURE-WALL-ART.webp"
              alt="profile picture"
              className={styles.profilesImg}
            />
            <button className={styles.addProfile}>+</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.showMenu}>
            <p className={styles.showMenuText}>....</p>
            <p className={styles.showMenuTextMargin}>Show Menu</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrelloVisibility;
