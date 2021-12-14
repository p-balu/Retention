import React from "react";
import Header from "../Common/Header";
import Adam from "../../assets/adam.png";
import PairPlot from "../../assets/pairplot.png";
import SGD from "../../assets/sgd.png";
const Graph = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ color: "black" }}>
        <h1 style={{ color: "black" }}>Graphs</h1>
        <div className="graph-container">
          <p className="header">Adam</p>
          <img src={Adam} alt="adam" className="image" />
        </div>
        <div className="graph-container">
          <p className="header">Pair Plot</p>
          <img src={PairPlot} alt="pairPlot" className="image" />
        </div>
        <div className="graph-container">
          <p className="header">SGD</p>
          <img src={SGD} alt="sgd" className="image" />
        </div>
      </div>
    </>
  );
};
export default Graph;
