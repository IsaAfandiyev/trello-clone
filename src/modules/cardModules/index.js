import Navigation from "../../../src/components/navigation";
import TrelloList from "../../../src/components/trelloList";
import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./index.module.css";
import TrelloActionButton from "../../components/trelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { getCards, getLists, sort } from "../../actions";
import TrelloVisibility from "../../components/trelloVisibility";
import {withRouter} from "../../components/withRouter";

class CardModule extends Component {
  onDragEnd = (result) => {
    this.props.onDragEnd(result);
  };

  componentDidMount() {
    this.props.getLists(this.props.params.boardId);
  }

  render() {
    const { lists } = this.props;

    console.log('this.props.params.boardId', this.props.params);

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
    getLists: (boardId) => {
      dispatch(getLists(boardId));
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
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardModule))
