import AddIcon from "@mui/icons-material/Add";
import React from "react";
import styles from "./index.module.css";
class TrelloActionButton extends React.Component {
  renderAddBtn = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";

    return (
      <div className={styles.addBtn}>
        <p>{buttonText}</p>
        <AddIcon>Add</AddIcon>
      </div>
    );
  };
  render() {
    return this.renderAddBtn();
  }
}
export default TrelloActionButton;
