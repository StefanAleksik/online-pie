import React from "react";
import { connect } from "react-redux";
import { getConfetti, getMsg } from "../../redux/selectors";
import Confetti from 'react-confetti'

const WinnerComponent = ({ msg, confetti }) => {
  return (
    <React.Fragment>
    {confetti ? <Confetti numberOfPieces={900} className="w-100 fixed-top" /> : ''}
      <div className="col-sm-8 mb-0 mt-auto mx-auto p-2 alert alert-warning">
        {<h4>{msg}</h4>}
      </div>      
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const msg = getMsg(state);
  const confetti = getConfetti(state);
  return { msg, confetti };
};

export const Winner = connect(mapStateToProps)(WinnerComponent);
