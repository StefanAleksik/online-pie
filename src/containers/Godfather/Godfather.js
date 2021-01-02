import React from "react";
import nextId from "react-id-generator";

import { connect } from "react-redux";
import { addParticipant, addSlice, addCoin } from "../../redux/actions";
import { getParticipants, getSlices } from '../../redux/selectors'

import { getRndInteger } from '../../utils'

class GodfatherContainer extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    let id = nextId();
    //redux stuff
    this.props.addParticipant({ name: this.input.value, pie: null });
    this.props.addSlice({ value: 1, coin: false, id });
    this.input.value = "";
  };

  goToPie = (ev) => {
    ev.preventDefault();
    const coin = getRndInteger(0, this.props.participants.length)
    this.props.addCoin(coin);
    this.props.history.push("/pie");
  };

  render() {
    return (
      <div className="card col-sm-7 m-auto">
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
          {this.props.participants.map((item, i) => (
            <li className="list-group-item" key={"participant_" + i}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="card-body">
          <button
            disabled={this.props.slices.length === 0}
            onClick={this.goToPie}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            Врти ме! Врти ме!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const participants = getParticipants(state);
  const slices = getSlices(state);
  return { participants, slices }
}

export const Godfather = connect(mapStateToProps, { addParticipant, addSlice, addCoin })(GodfatherContainer);
