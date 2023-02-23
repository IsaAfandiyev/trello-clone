import Navigation from "./components/navigation";
import TrelloList from "./components/trelloList";
import { connect } from "react-redux";
import React, { Component } from "react";
class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <Navigation />
        {lists.map((list) => (
          <TrelloList title={list.title} cards={list.cards} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
