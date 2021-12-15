import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { titleCase } from "title-case";
import Header from "../Common/Header";
import Dashboard from "./Dashboard";

export default function Table() {
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/database/")
      .then((res) => setPredictions(res.data.result));
  }, []);
  console.log(predictions);

  return (
    <>
      <Header />
      <div className="form-container" style={{ color: "black" }}>
        <Dashboard predictions={predictions} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1%",
            padding: "15px",
            marginTop: "1%",
          }}
        >
          <h1>Predictions</h1>
        </div>
        <table
          className="table table-striped"
          style={{
            emptyCells: "hide",
            textAlign: "center",
            color: "black",
            background: "white",
            marginBottom: "6%",
          }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Program Name</th>
              <th scope="col">Intake College Experience</th>
              <th scope="col">Academic Performance</th>
              <th scope="col">Age</th>
              <th scope="col">Prediction</th>
            </tr>
          </thead>
          <tbody>
            {predictions.length === 0 || predictions === undefined ? (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    marginTop: "2%",
                    textAlign: "center",
                  }}
                >
                  No Data
                </td>
              </tr>
            ) : (
              predictions.map((prediction, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{prediction.PROGRAM_LONG_NAME}</td>
                  <td>{prediction.INTAKE_COLLEGE_EXPERIENCE}</td>
                  <td>{prediction.ACADEMIC_PERFORMANCE}</td>
                  <td>{prediction.AGE_GROUP_LONG_NAME}</td>
                  <td>
                    {prediction.prediction === 0 && (
                      <span
                        className="tableSpan"
                        style={{
                          backgroundColor: "rgba(254, 226, 226)",
                          color: "rgba(153, 27, 27)",
                          padding: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        UNSUCCESSFULL
                      </span>
                    )}

                    {prediction.prediction === 2 && (
                      <span
                        className="tableSpan"
                        style={{
                          backgroundColor: "rgba(254, 243, 199)",
                          color: "rgba(146, 64, 14)",
                          padding: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        IN_PROGRESS
                      </span>
                    )}

                    {prediction.prediction === 1 && (
                      <span
                        className="tableSpan"
                        style={{
                          backgroundColor: "rgba(209, 250, 229)",
                          color: "rgba(6, 95, 70)",
                          padding: "4px",
                          borderRadius: "5px",
                        }}
                      >
                        SUCCESSFULL
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
