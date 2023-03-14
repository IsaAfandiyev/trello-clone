import AddIcon from "@mui/icons-material/Add";
import React from "react";
import styles from "./index.module.css";
import Card from "@mui/material/Card";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import { addList, addCard } from "../../actions/index";
import {withRouter} from "../withRouter";

class TrelloActionButton extends React.Component {
  state = {
    formOpen: false,
  };
  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };
  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text, this.props.params.boardId));

    }

  };
  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(text, listId));
    }
  };
  renderAddBtn = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const customHeight = list ? "100%" : "inherit";

    return (
      <div
        className={styles.addBtn}
        onClick={this.openForm}
        style={{ height: customHeight }}
      >
        <p>{buttonText}</p>
        <AddIcon>Add</AddIcon>
      </div>
    );
  };
  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title ..."
      : "Enter a title for this card...";

    const buttonTitle = list ? "Add List " : "Add Card";
    return (
      <div>
        <Card className={styles.card}>
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            className={styles.textAreaAutosize}
          />
        </Card>
        <div className={styles.addCloseBtnContainer}>
          <Button
            variant={"contained"}
            className={styles.addCardBtn}
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
          >
            {buttonTitle}
          </Button>
          <CloseIcon className={styles.closeIcon}>close</CloseIcon>
        </div>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddBtn();
  }
}
export default withRouter(connect()(TrelloActionButton));
