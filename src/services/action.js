
import { ADD_FORM,DELETE_FORM,SET_DOC_DESC,SET_DOC_NAME } from "./constants";
export let initialState = [{

  questions:[],
  doc_name:"",
  doc_desc: "",
  form_id:""
}];


// Action to add a new form
export const addForm = (questions,doc_name,doc_desc,form_id) => ({
  type: ADD_FORM,
  questions,
  doc_name,
  doc_desc,
  form_id,

});

// Action to delete a form by index
export const deleteForm = (formIndex) => ({
  type: DELETE_FORM,
  formIndex,

});

// Action to set document name
export const setDocName = (doc_name) => ({
  type: SET_DOC_NAME,
  doc_name,
});

// Action to set document description
export const setDocDesc = (doc_desc) => ({
  type: SET_DOC_DESC,
  doc_desc,
});


//REDUCER FUNCTION
const rootReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_FORM:
      return [
        ...state,
        {
          questions: action.questions,
          doc_name: action.doc_name,
          doc_desc: action.doc_desc,
          form_id:action.form_id,
        },
      ];

    case DELETE_FORM:
      return state.filter((form, index) => index !== action.formIndex);

    case SET_DOC_NAME:
      return state.map((form, index) =>
        index === action.formIndex
          ? { ...form, doc_name: action.doc_name }
          : form
      );

    case SET_DOC_DESC:
      return state.map((form, index) =>
        index === action.formIndex
          ? { ...form, doc_desc: action.doc_desc }
          : form
      );

    default:
      return state;
  }
};

export default rootReducer;
