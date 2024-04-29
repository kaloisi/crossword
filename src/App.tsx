import './App.css';
import React from 'react';
import { BoardState , Board } from './Board';
import Crossword from './Crossword';
import { loadDictionary } from './Dictionary';

interface Props {}

interface AppState {
  board : BoardState
}

function loadBoard() : BoardState {
  let crossword = new Crossword(loadDictionary());
  return crossword.toBoard();
}


export default class App extends React.Component<Props, AppState> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      board: loadBoard()
    };
  }

  render() {
      return (
        <div className="App">
          <Board board={this.state.board}/>
        </div>
      );
  }
}