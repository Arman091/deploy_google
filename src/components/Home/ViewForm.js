import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import SavedQuestion from "../Forms/SavedQuestion";
import "../Forms/Question_Form.css";
function ViewForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const forms = useSelector((state) => state);
  const data = forms.find((form) => form.form_id === id);

  function SavedForm() {
    return data.questions.map((ques, i) => (
      <div className="finalClass">
        <SavedQuestion question={ques} index={i} />
      </div>
    ));
  }

  function closeFormHandler() {
    navigate("/");
  }
  return (
    <>
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
                  value={data.doc_name}
                ></input>
                <input
                  type="text"
                  className="question_form_top_desc"
                  style={{ marginTop: "23px" }}
                  value={data.form_id}
                ></input>
                <div style={{ marginTop: "23px" }}>
                  Description :-{data.doc_desc}
                </div>
              </div>
            </div>
            {SavedForm()}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "9px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={closeFormHandler}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewForm;
