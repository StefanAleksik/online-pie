import { connect } from "react-redux";
import { getParticipants, getPosition } from '../../redux/selectors'


const CeremonyComponent = ({participants, position}) => {
    return (
        <div> {participants[position] ? 'Ајде куме/кумо бирај за ' + participants[position].name : 'Толку куме/кумо'} </div>
    )
}


const mapStateToProps = state => {
    const participants = getParticipants(state);
    const position = getPosition(state)
    return {participants, position} 
  }
  
export const Ceremony = connect(mapStateToProps)(CeremonyComponent);