import React, { Component, useState } from "react";
import "./Form.css";
import axios from "axios";
class Form extends Component {
  state = {
    intakeCollegeExperience: "",
    primaryProgramCode: 6809,
    programLongName: "",
    programSemesters: 2,
    totalProgramSemesters: 2,
    postalCode: "",
    mailingCountryName: "Canada",
    currentStayStatus: "",
    academicPerformance: "",
    gradTermCode: 200705,
    persistanceCount: "",
    averageMarks: 74,
    englishTestScore: 160,
    age: 25,
    success: "",
    failure: "",
    error: "",
    inProgress: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ACADEMIC_PERFORMANCE: academicPerformance.value,
        AGE_GROUP_LONG_NAME: age.value,
        CURRENT_STAY_STATUS: currentStayStatus.value,
        ENGLISH_TEST_SCORE: englishTestScore.value,
        EXPECTED_GRAD_TERM_CODE: gradTermCode.value,
        FIRST_YEAR_PERSISTENCE_COUNT: persistanceCount.value,
        HS_AVERAGE_MARKS: averageMarks.value,
        INTAKE_COLLEGE_EXPERIENCE: intakeCollegeExperience.value,
        MAILING_POSTAL_CODE_GROUP_3: postalCode.value,
        PRIMARY_PROGRAM_CODE: primaryProgramCode.value,
        PROGRAM_LONG_NAME: programLongName.value,
        PROGRAM_SEMESTERS: programSemesters.value,
        TOTAL_PROGRAM_SEMESTERS: totalProgramSemesters.value,
      }),
    };
    fetch("http://localhost:9000/predict/", request)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.prediction);
        if (data.prediction == 1) {
          this.setState({
            success: "Model predicts SUCCESSFULL. ",
            failure: "",
            inProgress: "",
          });
        } else if (data.prediction == 0) {
          this.setState({
            success: "",
            failure: "Model predicts UNSUCCESSFULL.  ",
            inProgress: "",
          });
        } else {
          this.setState({
            success: "",
            failure: "",
            inProgress: "Model predicts IN_PROGRESS. ",
          });
        }
      });
  };

  render() {
    const { success, failure, inProgress } = this.state;
    return (
      <div className="form-container">
        <h3>Predict</h3>
        {success && success.length > 0 && <p className="success">{success}</p>}
        {failure && failure.length > 0 && <p className="failure">{failure}</p>}
        {inProgress && inProgress.length > 0 && (
          <p className="warning">{inProgress}</p>
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="formFields">
            <div className="field">
              <label
                htmlFor="intakeTermCode"
                style={{ color: "black", textAlign: "left" }}
              >
                Intake College Experience *
              </label>
              <select
                name="intakeCollegeExperience"
                className="text-input-drop-down"
                placeholder="Enter Intake College Experience"
                onChange={(event) =>
                  this.setState({ intakeCollegeExperience: event.target.value })
                }
                value={this.state.intakeCollegeExperience}
                id="intakeCollegeExperience"
                required
              >
                <option value="">Select Intake College Experience</option>
                <option value="New to College">New to College</option>
                <option value="CE Enrolled"> CE Enrolled</option>
                <option value="Enrolled">Enrolled</option>
                <option value="Prep Program Enrolled">
                  Prep Program Enrolled
                </option>
                <option value="Graduate">Graduate</option>
              </select>
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
              <select
                name="currentStayStatus"
                className="text-input-drop-down"
                placeholder="Enter Intake College Experience"
                onChange={(event) =>
                  this.setState({ currentStayStatus: event.target.value })
                }
                value={this.state.currentStayStatus}
                id="currentStayStatus"
                required
              >
                <option value="">Select Intake College Experience</option>
                <option value="Graduated - On Time">Graduated - On Time</option>
                <option value="Graduated - Different Intake">
                  Graduated - Different Intake
                </option>
                <option value="Graduated - Extended Time">
                  Graduated - Extended Time
                </option>
                <option value="Graduated - Different Program">
                  Graduated - Different Program
                </option>
                <option value="Completed - Preparatory Program">
                  Completed - Preparatory Program
                </option>
                <option value="Left College - Enrolled 1 Term">
                  Left College - Enrolled 1 Term
                </option>
                <option value="Left College - Enrolled 2 Terms">
                  Left College - Enrolled 2 Terms
                </option>
                <option value="Left College - Enrolled 3 Terms">
                  Left College - Enrolled 3 Terms
                </option>
                <option value="Left College - Enrolled 4 Terms">
                  Left College - Enrolled 4 Terms
                </option>
                <option value="Left College - Enrolled 5 or more Terms">
                  Left College - Enrolled 5 or more Terms
                </option>
                <option value="Stepped Out - 1 Term Away">
                  Stepped Out - 1 Term Away
                </option>
                <option value="Stepped Out - 2 Terms Away">
                  Stepped Out - 2 Terms Away
                </option>
                <option value="Studying - Different Intake">
                  Studying - Different Intake
                </option>
                <option value="Studying - Different Program">
                  Studying - Different Program
                </option>
                <option value="Studying - Intake Program - Extended Time">
                  Studying - Intake Program - Extended Time
                </option>
                <option value="Studying - Intake Program - On Time">
                  Studying - Intake Program - On Time
                </option>
              </select>
            </div>

            <div className="field">
              <label
                htmlFor="academicPerformance"
                style={{ color: "black", textAlign: "left" }}
              >
                Academic Performance *
              </label>
              <select
                name="academicPerformance"
                className="text-input-drop-down"
                onChange={(event) =>
                  this.setState({ academicPerformance: event.target.value })
                }
                value={this.state.academicPerformance}
                id="academicPerformance"
                required
              >
                <option value="">Select Academic Performance</option>
                <option value="AB - Good">Good</option>
                <option value="C - Satisfactory">Satisfactory</option>
                <option value="DF - Poor">Poor</option>
                <option value="ZZ - Unknown">Unknown</option>
              </select>
            </div>
          </div>

          <div className="formFields">
            <div className="field">
              <label
                htmlFor="gradTermCode"
                style={{ color: "black", textAlign: "left" }}
              >
                Expected GradTerm Code (yyyymm)*
              </label>
              <input
                type="number"
                name="gradTermCode"
                className="text-input"
                placeholder="Enter Grad Term Code YYYYM"
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
              <select
                name="persistanceCount"
                className="text-input-drop-down"
                onChange={(event) =>
                  this.setState({ persistanceCount: event.target.value })
                }
                value={this.state.persistanceCount}
                id="persistanceCount"
                required
              >
                <option value="">Select Academic Performance</option>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
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

          <div className="formFields1">
            <div className="field1">
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
                placeholder="Enter HS Average Marks"
                onChange={(event) =>
                  this.setState({ englishTestScore: event.target.value })
                }
                value={this.state.englishTestScore}
                id="englishTestScore"
                required
              />
            </div>
            <div className="field1">
              <label
                htmlFor="age"
                style={{ color: "black", textAlign: "left" }}
              >
                Age *
              </label>
              <select
                name="age"
                className="text-input-drop-down"
                placeholder="Enter Intake College Experience"
                onChange={(event) => this.setState({ age: event.target.value })}
                value={this.state.age}
                id="age"
                required
              >
                <option value="">Select Age</option>
                <option value="0 to 18">0 to 18</option>
                <option value="19 to 20"> 19 to 20</option>
                <option value="21 to 25">21 to 25</option>
                <option value="26 to 30">26 to 30</option>
                <option value="31 to 35">31 to 35</option>
                <option value="36 to 40">36 to 40</option>
                <option value="41 to 45">41 to 45</option>
                <option value="46 to 50">46 to 50</option>
                <option value="51 to 55">51 to 55</option>
                <option value="56 to 60">56 to 60</option>
              </select>
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
