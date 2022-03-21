import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';

import './App.css';
import { applyNumber, changeOperation } from '../actions';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
//import { addOne } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const oneButton = number => {
    dispatch(applyNumber(number))
  }

  const changeOp = operator => {
    dispatch(changeOperation(operator))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => oneButton(1)} value={1}/>
              <CalcButton onClick={() => oneButton(2)} value={2}/>
              <CalcButton onClick={() => oneButton(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => oneButton(4)} value={4}/>
              <CalcButton onClick={() => oneButton(5)} value={5}/>
              <CalcButton onClick={() => oneButton(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => oneButton(7)} value={7}/>
              <CalcButton onClick={() => oneButton(8)} value={8}/>
              <CalcButton onClick={() => oneButton(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => changeOp("+")} value={"+"}/>
              <CalcButton onClick={() => changeOp("*")} value={"*"}/>
              <CalcButton onClick={() => changeOp("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
