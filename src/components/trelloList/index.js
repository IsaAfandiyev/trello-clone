import styles from "./index.module.css";
import TrelloCard from "../trelloCard";
import TrelloActionButton from "../trelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {(provided) => (
        <div
          className={styles.container}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h4 className={styles.title}>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              text={card.text}
              key={card.id}
              id={card.id}
              index={index}
            />
          ))}
          <TrelloActionButton card listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default TrelloList;
