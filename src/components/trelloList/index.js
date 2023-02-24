import styles from "./index.module.css";
import TrelloCard from "../trelloCard";
import TrelloActionButton from "../trelloActionButton";
const TrelloList = ({ title, cards }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {cards.map((card) => (
        <TrelloCard text={card.text} key={card.id} />
      ))}
      <TrelloActionButton card />
    </div>
  );
};
export default TrelloList;
