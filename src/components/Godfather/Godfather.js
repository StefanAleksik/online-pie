import React from 'react'

class Godfather extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(ev){
        ev.preventDefault();
        this.props.addParticipant({label: this.input.value, value: 1})
        this.input.value = ''
    }


    render(){
        return (
            <React.Fragment>
            <div className='row'>
            <form onSubmit={this.handleSubmit} className="form-inline col-sm-12">
            <div className="form-group mr-sm-1 mb-2">
              <input area-label='Participant' type="text" ref={el => this.input = el} className="form-control" id="inputPassword2" placeholder="Учесник" required ></input>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Додај</button>
          </form>
            </div>
            <div className='row'>
                <ul>
                    { this.props.pieData.map((item, i) => (<li key={'participant_' + i} >{item.label}</li>)) }
                </ul>
            </div>

            </React.Fragment>

        )
    }
}

export default Godfather