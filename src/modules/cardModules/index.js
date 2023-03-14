import Navigation from "../../../src/components/navigation";
import TrelloList from "../../../src/components/trelloList";
import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./index.module.css";
import TrelloActionButton from "../../components/trelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {getLists, sort} from "../../actions";
import TrelloVisibility from "../../components/trelloVisibility";

class CardModule extends Component {
  onDragEnd = (result) => {
    this.props.onDragEnd(result)
  };
  componentDidMount() {
    this.props.getLists()
  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <Navigation />
          <TrelloVisibility />
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                className={styles.listsContainer}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((list, index) => (
                  <TrelloList
                    title={list.title}
                    cards={list.cards}
                    key={list.id}
                    listId={list.id}
                    index={index}
                  />
                ))}
                <TrelloActionButton list />
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getLists: () => {
      dispatch(getLists())
    },
    onDragEnd: (result) => {
      const { destination, source, draggableId, type } = result;
      if (!destination) {
        return;
      }

      dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardModule);
