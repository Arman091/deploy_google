import React from "react";
import { Button} from "@mui/material";
import { BsFileText } from "react-icons/bs";
import ShortTextIcon from "@mui/icons-material/ShortText";

function ChooseAnswer(props) {
  const { ques, i, setOptionPoints, setOptionAnswer, doneAnswer } = props;

  return (
    <>
      <div className="top_header">Choose Correct Answer</div>
      <div>
        <div className="add_question_top">
          <input
            type="text"
            className="question"
            placeholder="Question"
            value={ques.questionText}
            disabled
          />
          <input
            type="number"
            className="points"
            min="0"
            step="1"
            max="4"
            placeholder="0"
            onChange={(e) => {
              setOptionPoints(e.target.value, i);
            }}
          />
        </div>
        {ques.options.map((op, j) => (
          <div
            className="add_question_body"
            key={j}
            style={{
              marginLeft: "8px",
              marginBottom: "10px",
              marginTop: "5px",
            }}
          >
            <div key={j}>
              <div style={{ display: "flex" }}>
                <div className="form-check">
                  <label
                    style={{ fontSize: "13px" }}
                    onClick={() => {
                      setOptionAnswer(ques.options[j].optionText, i);
                    }}
                  >
                    {ques.questionType !== "text" ? (
                      <input
                        type={ques.questionType}
                        name={ques.questionText}
                        value="option 3"
                        className="form-check-input"
                        required={ques.required}
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      />
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )}

                    {ques.options[j].optionText}
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="add_question_body">
          <Button
            size="small"
            style={{
              textTransform: "none",
              color: "#4285f4",
              fontSize: "13px",
              fontWeight: "600px",
            }}
          >
            <BsFileText style={{ fontSize: "20px", marginRight: "8px" }} />
            Add Answer Feedback
          </Button>
        </div>
        <div className="add_question_bottom">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              doneAnswer(i);
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </>
  );
}

export default ChooseAnswer;
