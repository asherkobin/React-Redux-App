import React from "react";
import { connect as connectToRedux } from "react-redux";
import { getRaceInfo } from "../actions";
import Loader from "react-loader-spinner";
import Race from "../components/Race";

const FormulaOne = props => {
  return (
    <div>
      <button onClick={props.getRaceInfo}>2020 Formula One Schedule</button>
      {
        props.isLoading && <Loader type="Puff" color="black" height={100} width={100} timeout={3000} />
      }
      <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        props.raceInfo && props.raceInfo.MRData.RaceTable.Races.map(raceInfo => 
          <Race raceInfo={raceInfo} key={raceInfo.round} />)
      }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    raceInfo: state.raceInfo,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connectToRedux(mapStateToProps, { getRaceInfo })(FormulaOne);