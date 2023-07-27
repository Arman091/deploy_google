// SavedQuestionsComponent.js
import React from "react";
import { Typography, FormControlLabel } from "@mui/material";
import "./Question_Form.css";

function SavedQuestion(props) {
  const { question, index } = props;

  return (
    <div className="saved_questions">
      <Typography
        style={{
          fontSize: "15px",
          fontWeight: "400",
          letterSpacing: ".1px",
          lineleight: "24px",
          paddingBottom: "8px",
        }}
      >
        {index + 1}. {question.questionText}
      </Typography>

      {question.options.map((option, j) => (
        <div key={j}>
          <div style={{ display: "flex" }}>
            {/* <FormControlLabel
              style={{ marginLeft: "5px", marginBottom: "5px" }}
              disabled
              control={
                <input
                  type={question.questionType}
                  color="primary"
                  style={{ marginRight: "3px" }}
                  required={question.required}
                />
              }
              label={option.optionText}
            /> */}
            {question.questionType !== "text" ? (
              <FormControlLabel
                style={{ marginLeft: "5px", marginBottom: "5px" }}
                disabled
                control={
                  <input
                    type={question.questionType}
                    color="primary"
                    style={{ marginRight: "3px" }}
                    required={question.required}
                  />
                }
                label={option.optionText}
              />
            ) : (
              <textarea
                className="text_input"
                placeholder="options"
                value={option.optionText}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedQuestion;
