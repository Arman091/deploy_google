import {
  IconButton,
  AccordionSummary,
  AccordionDetails,
  Accordion,
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// imported components and services 
import { setQuestions, setDocName, setDocDesc } from "../../services/action";
import "./Question_Form.css";
import SavedQuestion from "./SavedQuestion";
import AddQuesType from "./AddQuesType";
import AddOption from "./AddOption";
import ChooseAnswer from "./Answer";
function QuestionForm() {
  const [questions, setquestions] = useState([
    {
      questionText: "",
      questionType: "radio",
      options: [
        { optionText: "" },
        { optionText: "" },
        { optionText: "" },
        { optionText: "" },
      ],
      answer: false,
      answerKey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);

  // Events to Handle Form Submission
  const [description, setDescription] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleFormTitleChange(e) {
    setFormTitle(e.target.value);
  }

  function handleSaveForm() {
    if (description.trim() === "") {
      alert("Description cannot be empty");
      return;
    }

    if (formTitle.trim() === "") {
      alert("Form Title cannot be empty");
      return;
    }
    else {
      dispatch(setQuestions(questions));
      dispatch(setDocName(formTitle));
      dispatch(setDocDesc(description));
      navigate("/")
    }
  }

  // Form editing Related Events
  function setOptionAnswer(ans, qno) {
    let Questions = [...questions];
    Questions[qno].answerKey = ans;
    setquestions(Questions);
  }

  function setOptionPoints(points, qno) {
    let Questions = [...questions];
    Questions[qno].points = points;
    setquestions(Questions);
  }

  function doneAnswer(i) {
    let answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setquestions(answerOfQuestion);
  }

  function AddAnswer(i) {
    let answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setquestions(answerOfQuestion);
  }
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
  }

  function addQuestionType(i, type) {
    let qs = [...questions];

    qs[i].questionType = type;
    setquestions(qs);
  }

  function changeOptionValue(text, i, j) {
    let optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setquestions(optionsQuestion);
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
          <div className="question_boxes">
            {!questions[i].answer ? (
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
                  <AddOption index={i} ques={ques} addOption={addOption} />
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
                      onClick={() => {
                        AddAnswer(i);
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
            ) : (
              // add option yahan se todo
              <AccordionDetails className="add_question">
                <ChooseAnswer
                  ques={questions[i]}
                  i={i}
                  setOptionPoints={setOptionPoints}
                  setOptionAnswer={setOptionAnswer}
                  doneAnswer={doneAnswer}
                />
              </AccordionDetails>
            )}

            {!ques.answer ? (
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
            ) : (
              ""
            )}
          </div>
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
                value={formTitle}
                onChange={handleFormTitleChange}
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                placeholder=" change Form Description"
                value={description}
                onChange={handleDescriptionChange}
              ></input>
            </div>
          </div>
          {questionsUI()}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "9px",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSaveForm}>
            SAVE Form
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
