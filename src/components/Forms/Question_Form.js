import {
  IconButton,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  FormControlLabel,
  Button,
  Switch,
} from "@mui/material";

import TextFieldsIcon from "@mui/icons-material/TextFields";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ShortTextIcon from "@mui/icons-material/ShortText";
import CloseIcon from "@mui/icons-material/Close";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
// icons above imported
import { FcRightUp } from "react-icons/fc";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import "./Question_Form.css";
import SavedQuestion from "./SavedQuestion";
import AddQuesType from "./AddQuesType";

function QuestionForm() {
  const [questions, setquestions] = useState([
    {
      questionText: "Write Your Question Here",
      questionType: "radio",
      options: [
        { optionText: "" },
        { optionText: "" },
        { optionText: "" },
        { optionText: "" },
      ],
      open: true,
      required: false,
    },
  ]);

  function toggleAll() {
    let qs = [...questions];
    for (let i = 0; i < qs.length; i++) {
      qs[i].open = false;
    }
    setquestions(qs);
  }
  function toggleOne(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;
      } else {
        qs[j].open = false;
      }
    }
    setquestions(qs);
  }
  function changeQuestion(text, i) {
    let newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setquestions(newQuestion);
    console.log(newQuestion);
  }

  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;
    setquestions(qs);
  }

  function changeOptionValue(text, i, j) {
    let optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setquestions(optionsQuestion);
    console.log(optionsQuestion);
  }

  function removeOption(i, j) {
    let RemoveOptionQuestion = [...questions];
    if (RemoveOptionQuestion[i].options.length > 1) {
      RemoveOptionQuestion[i].options.splice(j, 1);
      setquestions(RemoveOptionQuestion);
    }
  }
  function addOption(i) {
    let quesoption = [...questions];
    if (quesoption[i].options.length < 5) {
      quesoption[i].options.push({
        optionText: `option${quesoption[i].options.length + 1}`,
      });
    } else {
      alert("max-5 questions");
    }
    setquestions(quesoption);
  }
  function copyQuestion(i) {
    let qs = [...questions];
    let newQuestion = { ...qs[i] };

    for (let j = 0; j < qs.length; j++) {
      if (i !== j) {
        qs[j].open = false;
      }
    }

    qs.push(newQuestion);

    setquestions(qs);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setquestions(qs);
  }

  function requiredQuestion(i) {
    let reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    console.log(reqQuestion[i].required + "" + i);
    setquestions(reqQuestion);
  }

  function addMoreQuestion() {
    toggleAll();
    setquestions([
      ...questions,
      {
        questionType: "radio",
        options: [{ optionText: "option 1" }],
        open: true,
        required: false,
      },
    ]);
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          expanded={ques.open}
          className={ques.open ? "add_border" : ""}
          onChange={() => {
            toggleOne(i);
          }}
        >
          <AccordionSummary
            aria-controls="panella-content"
            id="panella-header"
            elevation={1}
            style={{ width: "100%", marginTop: "9px" }}
          >
            {/* =++++==++++=== SAVED Questions COMPONENT BEING RENDERED ===========++++++++= */}
            {!ques.open ? <SavedQuestion question={ques} index={i} /> : ""}
          </AccordionSummary>
          {questions[i].open ? (
            <div className="question_boxes">
              <AccordionDetails className="add_question">
                {/* AddQuesType component */}
                <AddQuesType
                  changeQuestion={changeQuestion}
                  addQuestionType={addQuestionType}
                  i={i}
                  ques={ques}
                />

                {ques.options.map((op, j) => (
                  <div className="add_question_body" key={j}>
                    {ques.questionType !== "text" ? (
                      <input
                        type={ques.questionType}
                        style={{ marginRight: "10px" }}
                      />
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )}
                    <div>
                      <input
                        type="text"
                        className="text_input"
                        placeholder="options"
                        value={ques.options[j].optionText}
                        onChange={(e) => {
                          changeOptionValue(e.target.value, i, j);
                        }}
                      ></input>
                    </div>
                    <CropOriginalIcon style={{ color: "#5f6368" }} />
                    <IconButton aria-label="delete">
                      <CloseIcon
                        onClick={() => {
                          removeOption(i, j);
                        }}
                      />
                    </IconButton>
                  </div>
                ))}

                {ques.options.length < 5 ? (
                  <div className="add_question_body">
                    <FormControlLabel
                      disabled
                      control={
                        ques.questionType !== "text" ? (
                          <input
                            type={ques.questionType}
                            color="primary"
                            inputprops={{ "aria-label": "secondary checkbox" }}
                            style={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled
                          />
                        ) : (
                          <ShortTextIcon style={{ marginRight: "10px" }} />
                        )
                      }
                      label={
                        <div>
                          <input
                            type="text"
                            className="text_input"
                            style={{ fontSize: "13px", width: "60px" }}
                            placeholder="Add other"
                          ></input>{" "}
                          <Button
                            size="small"
                            style={{
                              textTransform: "none",
                              color: "#4285f4",
                              fontSize: "13px",
                              fontweight: "600",
                            }}
                            onClick={() => {
                              addOption(i);
                            }}
                          >
                            Add Option
                          </Button>
                        </div>
                      }
                    />
                  </div>
                ) : (
                  ""
                )}

                <div className="add_footer">
                  <div className="add_question_bottom_left">
                    <Button
                      size="small"
                      style={{
                        textTransform: "none",
                        color: "#4285f4",
                        fontSize: "13px",
                        fontWeight: "660",
                      }}
                    >
                      <FcRightUp style={{ marginRight: "8px" }} />
                      Answer Key
                    </Button>
                  </div>
                  <div className="add_question_bottom">
                    <IconButton
                      aria-label="copy"
                      onClick={() => {
                        copyQuestion(i);
                      }}
                    >
                      <FilterNoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        deleteQuestion(i);
                      }}
                    >
                      <BsTrash />
                    </IconButton>
                    <span style={{ color: "#5f6368", fontSize: "13px" }}>
                      Required
                    </span>
                    <Switch
                      name="checkdA"
                      color="primary"
                      onClick={() => {
                        requiredQuestion(i);
                      }}
                    />
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
              </AccordionDetails>
              <div className="question_edit">
                <IconButton>
                  <AddCircleOutlineIcon
                    onClick={addMoreQuestion}
                    className="edit"
                  />
                </IconButton>
                <OndemandVideoIcon className="edit" />
                <CropOriginalIcon className="edit" />
                <TextFieldsIcon className="edit" />
              </div>
            </div>
          ) : (
            ""
          )}
        </Accordion>
      </div>
    ));
  }
  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form Description"
              ></input>
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
