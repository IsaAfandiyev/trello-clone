import Navigation from "./components/navigation";
import TrelloList from "./components/trelloList";
import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./index.module.css";
import TrelloActionButton from "./components/trelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../src/actions";

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggebleId } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggebleId
      )
    );
  };
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <Navigation />
          <div className={styles.listsContainer}>
            {lists.map((list) => (
              <TrelloList
                title={list.title}
                cards={list.cards}
                key={list.id}
                listId={list.id}
              />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
