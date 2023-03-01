import Navigation from "./components/navigation";
import TrelloList from "./components/trelloList";
import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./index.module.css";
import TrelloActionButton from "./components/trelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  onDragEnd = () => {
    //todo rendering logic...
  };
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd()}>
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
