import React from "react";
import { connect } from "react-redux";
import { getConfetti, getMsg, getSearch } from "../../redux/selectors";
import Confetti from "react-confetti";

const WinnerComponent = ({ msg, confetti, search }) => {
  let dots = ["dot1", "dot2", "dot3"];
  return (
    <React.Fragment>
      {confetti ? (
        <Confetti numberOfPieces={900} className="w-100 fixed-top" />
      ) : (
        ""
      )}
      <div className="col-sm-8 mb-0 mt-auto mx-auto p-2 alert alert-warning">
        {<h4>{msg}</h4>}
        {search
          ? dots.map((item) => (
              <div key={item} className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ))
          : ""}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const msg = getMsg(state);
  const confetti = getConfetti(state);
  const search = getSearch(state);
  return { msg, confetti, search };
};

export const Winner = connect(mapStateToProps)(WinnerComponent);
