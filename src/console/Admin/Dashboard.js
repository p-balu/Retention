import React, { useEffect, useState } from "react";
import { titleCase } from "title-case";
import Header from "../Common/Header";

export default function Dashboard(props) {
  const [successfull, setSuccessfull] = useState(0);
  const [unSuccessfull, setunSuccessfull] = useState(0);
  const [inProgress, setInProgress] = useState(0);

  useEffect(() => {
    if (props.predictions.length > 0) {
      var successfull = 0;
      var unSuccessfull = 0;
      var inProgress = 0;
      for (let i = 0; i < props.predictions.length; i++) {
        console.log("entered loop");
        if (props.predictions[i].prediction === 0) {
          unSuccessfull++;
        } else if (props.predictions[i].prediction === 2) {
          inProgress++;
        } else {
          successfull++;
        }
      }
      setSuccessfull(successfull);
      setInProgress(inProgress);
      setunSuccessfull(unSuccessfull);
    }
  }, [props]);

  return (
    <>
      <h1 style={{ color: "black" }}>Overview</h1>
      <div className="overView">
        <div className="statusClass" style={{ width: "100%" }}>
          <div className="cardView">
            <div
              className="card"
              style={{
                backgroundColor: "#f5f4f4",
              }}
            >
              <h5 className="text">Total Predictions</h5>
              <p>{successfull + unSuccessfull}</p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(209, 250, 229)",
                color: "rgba(6, 95, 70)",
              }}
            >
              <h5 className="fs-3 text">Successful</h5>
              <p>{successfull}</p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(254, 243, 199)",
                color: "rgba(146, 64, 14)",
              }}
            >
              <h5 className="fs-3 text">In Progress</h5>
              <p>{inProgress}</p>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(254, 226, 226)",
                color: "rgba(153, 27, 27)",
              }}
            >
              <h5 className="text">Unsuccessfull</h5>
              <p>{unSuccessfull}</p>
            </div>

            <div
              className="card col"
              style={{
                backgroundColor: "rgba(224, 231, 255)",
                color: "rgba(55, 48, 163)",
              }}
            >
              <h5 className="fs-3 text">Model Accuracy</h5>
              <p>93.5%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
