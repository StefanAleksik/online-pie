import React from "react";
import nextId from "react-id-generator";

import { connect } from "react-redux";
import { addParticipant, addSlice, addCoin, removeParticipant } from "../../redux/actions";
import { getParticipants } from "../../redux/selectors";

import { getRndInteger } from "../../utils";

class GodfatherContainer extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();    
    const participantId = nextId()
    //redux stuff
    this.props.addParticipant({ name: this.input.value, participantId });
    this.input.value = "";
  };

  goToPie = (ev) => {
    ev.preventDefault();

    for(let i = 0; i < this.props.participants.length; i++){
      const id = nextId();
      this.props.addSlice({ value: 1, coin: false, id });
    }
    const coin = getRndInteger(0, this.props.participants.length);
    this.props.addCoin(coin);
    this.props.history.push("/pie");
  };

  removeParticipant = (item) => {
    this.props.removeParticipant(item);
  }

  render() {
    return (
      <div className="card col-sm-6 m-auto">
        <div className="card-body">
          <h5 className="card-title mx-auto">Додади учесници</h5>
          <form onSubmit={this.handleSubmit} className="form-group">
            <div className="input-group mb-1">
              <input
                area-label="Participant"
                type="text"
                ref={(el) => (this.input = el)}
                className="form-control "
                placeholder="Учесник"
                required
              ></input>
              <div className="input-group-append">
                <button type="submit" className="btn btn-outline-primary">
                  Додај
                </button>
              </div>
            </div>
          </form>
        </div>
        <ul className="list-group list-group-flush">
          {this.props.participants.map((item) => (
            <li className="list-group-item" key={item.participantId}>
              <span>{item.name}</span>
              <button onClick={this.removeParticipant.bind(this, item)} className="btn btn-outline-danger m-0 p-1 btn-sm float-right">
                <span>X</span>
              </button>              
            </li>
          ))}
        </ul>
        <div className="card-body">
          <button
            disabled={this.props.participants.length === 0}
            onClick={this.goToPie}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            Подели ја питата!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const participants = getParticipants(state);
  return { participants };
};

export const Godfather = connect(mapStateToProps, {
  addParticipant,
  addSlice,
  addCoin,
  removeParticipant
})(GodfatherContainer);
