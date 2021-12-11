import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { titleCase } from "title-case";
import Header from "../Common/Header";
import Dashboard from "./dashboard";

export default function Table() {
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState("");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <div className="form-container" style={{ color: "black" }}>
        <Dashboard />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3%",
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
              <th scope="col">Intake Term Code</th>
              <th scope="col">Country Name</th>
              <th scope="col">Current Status</th>
              <th scope="col">Prediction</th>
              <th scope="col">Predicted at</th>
            </tr>
          </thead>
          <tbody>
            {/* {incidents.length === 0 || incidents === undefined ? (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    marginTop: "2%",
                  }}
                >
                  No Data
                </td>
              </tr>
            ) : ( */}
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td>
                {/* {incident.status === "pending" && (
                      <span
                        className="tableSpan"
                        style={{
                          backgroundColor: "rgba(254, 226, 226)",
                          color: "rgba(153, 27, 27)",
                        }}
                      >
                        {incident.status}
                      </span>
                    )}
                    {incident.status === "in_progress" && (
                      <span
                        className="tableSpan"
                        style={{
                          backgroundColor: "rgba(254, 243, 199)",
                          color: "rgba(146, 64, 14)",
                        }}
                      >
                        {incident.status}
                      </span>
                    )}

                    {/* {incident.status === "completed" && (
                      <span
                        className="tableSpan"
                        style={{
                          backgroundColor: "rgba(209, 250, 229)",
                          color: "rgba(6, 95, 70)",
                        }}
                      >
                        {incident.status}
                      </span>
                    )} */}
                {/* {incident.status === "closed" && (
                      <span
                        className="tableSpan"
                        style={{
                          backgroundColor: "rgba(224, 231, 255)",
                          color: "rgba(55, 48, 163)",
                        }}
                      >
                        {incident.status}
                      </span>
                    )}  */}
              </td>

              <td></td>
              <td>ago</td>
            </tr>
            {/* )} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
