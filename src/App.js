import Navigation from "./components/navigation";
import TrelloList from "./components/trelloList";
import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./index.module.css";
class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <Navigation />
        <div className={styles.listsContainer}>
          {lists.map((list) => (
            <TrelloList title={list.title} cards={list.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
