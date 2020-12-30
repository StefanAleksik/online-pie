import React from "react";

class Godfather extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit =(ev) => {
    ev.preventDefault();
    this.props.addParticipant({ label: this.input.value, value: 1 });
    this.input.value = "";
  }

  goToPie = (ev) => {
      ev.preventDefault()
      this.props.history.push('/pie')
  }

  render() {
    return (
      <div className="card col-sm-9 m-auto">
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
          {this.props.pieData.map((item, i) => (
            <li className="list-group-item" key={"participant_" + i}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className="card-body">
        <button onClick={this.goToPie} type="button" className="btn btn-primary btn-lg btn-block">Врти ме! Врти ме!</button>
        </div>
      </div>
    );
  }
}

export default Godfather;
