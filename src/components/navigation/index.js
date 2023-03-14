import React from "react";
import Icon from "../../assets/icons/chart-simple-solid.svg";
import menuIcon from "../../assets/icons/gridMenu.png";
import chevron from "../../assets/icons/chevron-down-solid (1).svg";
import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";

function Navigation() {
  const PopupExample = () => (
    <Popup trigger={<img src={chevron} alt="" />} position={"bottom right"}>
      {(close) => (
        <div>
          <Link
            to="/signup"
            preventScrollReset={true}
            className="close"
            onClick={() => {
              signOut(getAuth()).then((_) => close());
            }}
            style={{ cursor: "pointer" }}
          >
            log out
          </Link>
        </div>
      )}
    </Popup>
  );

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="trelloicon">
            <img src={Icon} alt="" />
          </div>
          <div className="trello">
            <h1>Thullo</h1>
          </div>
          <div className="devchallangesBoard">
            <h1>Devchallanges Board</h1>
          </div>
          <div className="line"></div>
          <div className="allBoard">
            <img src={menuIcon} alt="" />
            <p>
              <Link
                to="/#"
                style={{ cursor: "pointer",textDecoration:"none" ,color:"black" }}
              >
                All boards
              </Link>
            </p>
          </div>
        </div>
        <div className="right">
          <div className="searchBar">
            <input
              type="text"
              placeholder="Keyword..."
              className="keywordInput"
            />
            <button className="searchBtn">Search</button>
          </div>
          <div className="userName">
            <img src="" alt="" className="avatarIcon" />
            <p>Isa Afandiyev</p>
            {/*<img src={chevron} alt="" />*/}
            <PopupExample />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
