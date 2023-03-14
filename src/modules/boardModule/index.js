import {Link} from "react-router-dom";
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CONSTANTS} from "../../actions";
import {createBoard, getBoards} from "../../actions/boardActions";
import uuid from "react-uuid";

const BoardModule = () => {
  const dispatch = useDispatch();
  const {boards} = useSelector(state => state);

  console.log(boards);

  useEffect(() => {
    getBoards()(dispatch);
  }, []);

  return <div style={{ margin: '50px'}}>

    <a href="#" onClick={() => createBoard('TEST BOARD' + uuid())(dispatch)}>Create new board</a>
    <hr/>
    {boards.map(board => <Link style={{ display: 'block', marginBottom: '15px' }} key={board.id} to={'/boards/' + board.id}>{board.title}</Link>)}
  </div>
}

export default BoardModule;