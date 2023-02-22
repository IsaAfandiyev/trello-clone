import Icon from "../../assets/icons/chart-simple-solid.svg";
import menuIcon from "../../assets/icons/gridMenu.png";
import chevron from "../../assets/icons/chevron-down-solid (1).svg";
import "./index.css";
function Navigation() {
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
            <p>All board</p>
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
            <img src={chevron} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
