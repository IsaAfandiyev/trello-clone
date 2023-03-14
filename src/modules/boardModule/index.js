import {Link} from "react-router-dom";
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CONSTANTS} from "../../actions";
import {createBoard, getBoards} from "../../actions/boardActions";
import uuid from "react-uuid";
import styles from "./index.module.css"
import Navigation from "../../components/navigation";



const BoardModule = () => {
  const dispatch = useDispatch();
  const {boards} = useSelector(state => state);

  function randomNum(){
    let x = Math.floor((Math.random() * 100) + 1);
    return x;
  }


  useEffect(() => {
    getBoards()(dispatch);
  }, []);

  return <div  className={styles.container}>
    <Navigation/>
    <div className={styles.headerContainer}>
      <h1>All boards</h1>
      <a href="#" onClick={() => createBoard('TEST BOARD' + uuid())(dispatch)}>
        Create new Board
      </a>
    </div>
    <div className={styles.boardContainer}>

    {boards.map(board => <Link className={styles.boardListContainer} key={board.id} to={'/boards/' + board.id}>
      <img src={`${'https://source.unsplash.com/featured/300x2'}+${randomNum()}`} alt="" className={styles.boardCardImg}/>

      {board.title}
    </Link>)}

    </div>

  </div>
}

export default BoardModule;