
export let initialState = {
  questions: [
    {
      questionText: "Question",
      questionType: "radio",
      options: [{ optionText: "option 1" }],
      open: true,
      required: false,
    },
  ],
  questionType: "radio",
  doc_name: "untitled form",
  doc_desc: "add the description",
};

export let actionTypes = {
    SET_QUESTIONS: "SET_QUESTIONS",
    CHANGE_TYPE: "CHANGE_TYPE",
    SET_DOC_NAME: "SET_DOC_NAME",
    SET_DOC_DESC:"SET_DOC_DESC"
}
// action creaters
export const setQuestions = (questions) => ({
  type: actionTypes.SET_QUESTIONS,
  questions,
});

export const changeType = (questionType) => ({
  type: actionTypes.CHANGE_TYPE,
  questionType,
});

export const setDocName = (doc_name) => ({
  type: actionTypes.SET_DOC_NAME,
  doc_name,
});

export const setDocDesc = (doc_desc) => ({
  type: actionTypes.SET_DOC_DESC,
  doc_desc,
});

const rootreducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_QUESTIONS:
        return {
          ...state,
          questions: action.questions,
        };
      case actionTypes.CHANGE_TYPE:
        return {
          ...state,
          questionType: action.questionType,
        };
      case actionTypes.SET_DOC_NAME:
        return {
          ...state,
          doc_name: action.doc_name,
        };
      case actionTypes.SET_DOC_DESC:
        return {
          ...state,
          doc_desc: action.doc_desc,
            };
        
        default: return state;
    }
}

export default rootreducer;