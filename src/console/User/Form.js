import React, { Component, useState } from "react";
import "./Form.css";
import axios from "axios";
class Form extends Component {
  state = {
    intakeTermCode: "",
    primaryProgramCode: 6809,
    programLongName: "",
    programSemesters: 2,
    totalProgramSemesters: 2,
    postalCode: "",
    mailingCountryName: "",
    currentStayStatus: "",
    academicPerformance: "",
    gradTermCode: "",
    persistanceCount: "",
    averageMarks: 74,
    englishTestScore: 160,
    age: 25,
    firstLanguage: "",
  };

  componentDidMount() {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ACADEMIC_PERFORMANCE: "AB - Good",
        AGE_GROUP_LONG_NAME: "21 to 25",
        CURRENT_STAY_STATUS: "",
        ENGLISH_TEST_SCORE: 160,
        EXPECTED_GRAD_TERM_CODE: null,
        FIRST_YEAR_PERSISTENCE_COUNT: null,
        HS_AVERAGE_MARKS: 69,
        INTAKE_COLLEGE_EXPERIENCE: "CE Enrolled",
        MAILING_POSTAL_CODE_GROUP_3: "M1T",
        PRIMARY_PROGRAM_CODE: null,
        PROGRAM_LONG_NAME: "Community and Justice Services",
        PROGRAM_SEMESTERS: null,
        TOTAL_PROGRAM_SEMESTERS: null,
      }),
    };
    fetch("http://localhost:9000/predict/", request).then((res) =>
      console.log("successfull", res)
    );
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="form-container">
        <h3>Predict</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="formFields">
            <div className="field">
              <label
                htmlFor="intakeTermCode"
                style={{ color: "black", textAlign: "left" }}
              >
                Intake Term Code *
              </label>
              <input
                type="number"
                name="intakeTermCode"
                className="text-input"
                placeholder="Enter Intake Term Code MMYYYY"
                onChange={(event) =>
                  this.setState({ intakeTermCode: event.target.value })
                }
                value={this.state.intakeTermCode}
                id="intakeTermCode"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="primaryProgramCode"
                style={{ color: "black", textAlign: "left" }}
              >
                Primary Program Code *
              </label>
              <input
                type="number"
                name="primaryProgramCode"
                className="text-input"
                placeholder="Enter Primary Program code"
                onChange={(event) =>
                  this.setState({ primaryProgramCode: event.target.value })
                }
                value={this.state.primaryProgramCode}
                id="primaryProgramCode"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="programLongName"
                style={{ color: "black", textAlign: "left" }}
              >
                Program Long Name *
              </label>
              <input
                type="text"
                name="programLongName"
                className="text-input"
                placeholder="Enter Program Name"
                onChange={(event) =>
                  this.setState({ programLongName: event.target.value })
                }
                value={this.state.programLongName}
                id="programLongName"
                required
              />
            </div>
          </div>
          <div className="formFields">
            <div className="field">
              <label
                htmlFor="programSemesters"
                style={{ color: "black", textAlign: "left" }}
              >
                Program Semesters *
              </label>
              <input
                type="number"
                name="programSemesters"
                className="text-input"
                placeholder="Enter Program semesters"
                onChange={(event) =>
                  this.setState({ programSemesters: event.target.value })
                }
                value={this.state.programSemesters}
                id="programSemesters"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="totalProgramSemesters"
                style={{ color: "black", textAlign: "left" }}
              >
                Total Program Semesters *
              </label>
              <input
                type="number"
                name="totalProgramSemesters"
                className="text-input"
                placeholder="Enter Total Program Semesters"
                onChange={(event) =>
                  this.setState({ totalProgramSemesters: event.target.value })
                }
                value={this.state.totalProgramSemesters}
                id="totalProgramSemesters"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="postalCode"
                style={{ color: "black", textAlign: "left" }}
              >
                Mailing Postal Code Group 3 *
              </label>
              <input
                type="text"
                name="postalCode"
                className="text-input"
                placeholder="Enter Postal Code Group 3"
                onChange={(event) =>
                  this.setState({ postalCode: event.target.value })
                }
                value={this.state.postalCode}
                id="postalCode"
                required
              />
            </div>
          </div>

          <div className="formFields">
            <div className="field">
              <label
                htmlFor="mailingCountryName"
                style={{ color: "black", textAlign: "left" }}
              >
                Mailing Country Name *
              </label>
              <input
                type="text"
                name="mailingCountryName"
                className="text-input"
                placeholder="Enter Mailing Country Name *"
                onChange={(event) =>
                  this.setState({ mailingCountryName: event.target.value })
                }
                value={this.state.mailingCountryName}
                id="mailingCountryName"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="currentStayStatus"
                style={{ color: "black", textAlign: "left" }}
              >
                Current Stay Status *
              </label>
              <input
                type="text"
                name="currentStayStatus"
                className="text-input"
                placeholder="Enter Current Stay Status"
                onChange={(event) =>
                  this.setState({ currentStayStatus: event.target.value })
                }
                value={this.state.currentStayStatus}
                id="currentStayStatus"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="academicPerformance"
                style={{ color: "black", textAlign: "left" }}
              >
                Academic Performance *
              </label>
              <input
                type="text"
                name="academicPerformance"
                className="text-input"
                placeholder="Enter Academic Performance"
                onChange={(event) =>
                  this.setState({ academicPerformance: event.target.value })
                }
                value={this.state.academicPerformance}
                id="academicPerformance"
                required
              />
            </div>
          </div>

          <div className="formFields">
            <div className="field">
              <label
                htmlFor="gradTermCode"
                style={{ color: "black", textAlign: "left" }}
              >
                Expected Grad Term Code *
              </label>
              <input
                type="number"
                name="gradTermCode"
                className="text-input"
                placeholder="Enter Grad Term Code MMYYYY"
                onChange={(event) =>
                  this.setState({ gradTermCode: event.target.value })
                }
                value={this.state.gradTermCode}
                id="gradTermCode"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="persistanceCount"
                style={{ color: "black", textAlign: "left" }}
              >
                First Year Persistance Count *
              </label>
              <input
                type="number"
                name="persistanceCount"
                className="text-input"
                placeholder="Enter First Year Persistance Count"
                onChange={(event) =>
                  this.setState({ persistanceCount: event.target.value })
                }
                value={this.state.persistanceCount}
                id="persistanceCount"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="averageMarks"
                style={{ color: "black", textAlign: "left" }}
              >
                HS Average Marks *
              </label>
              <input
                type="number"
                name="averageMarks"
                className="text-input"
                placeholder="Enter HS Average Marks"
                onChange={(event) =>
                  this.setState({ averageMarks: event.target.value })
                }
                value={this.state.averageMarks}
                id="averageMarks"
                required
              />
            </div>
          </div>

          <div className="formFields">
            <div className="field">
              <label
                htmlFor="englishTestScore"
                style={{ color: "black", textAlign: "left" }}
              >
                English Test Score *
              </label>
              <input
                type="number"
                name="englishTestScore"
                className="text-input"
                placeholder="Enter English Test Score"
                onChange={(event) =>
                  this.setState({ englishTestScore: event.target.value })
                }
                value={this.state.englishTestScore}
                id="englishTestScore"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="age"
                style={{ color: "black", textAlign: "left" }}
              >
                Age *
              </label>
              <input
                type="number"
                name="age"
                className="text-input"
                placeholder="Enter Age"
                onChange={(event) => this.setState({ age: event.target.value })}
                value={this.state.age}
                id="age"
                required
              />
            </div>
            <div className="field">
              <label
                htmlFor="firstLanguage"
                style={{ color: "black", textAlign: "left" }}
              >
                Applicant First Language Desc *
              </label>
              <input
                type="text"
                name="firstLanguage"
                className="text-input"
                placeholder="Enter Application First Languauge Description"
                onChange={(event) =>
                  this.setState({ firstLanguage: event.target.value })
                }
                value={this.state.firstLanguage}
                id="firstLanguage"
                required
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input className="button" type="submit" value="Predict" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
