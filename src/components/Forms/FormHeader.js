import { Fragment } from "react";

import Formicon from "../images/goforms.png";
import "./FormHeader.css";
import { useParams } from "react-router";
const FormHeader = () => {
  const { id } = useParams();
  return (
    <Fragment>
      <div className="form_header">
        <div className="form_header_left">
          <img
            src={Formicon}
            style={{ height: "37px", width: "36px", marginLeft: "23px" }}
            alt="Error"
          />
          <input type="text" placeholder={id} className="form_name"></input>

          <span className="span">
            All Changes Saved in Drive
          </span>
        </div>
        
      </div>
    </Fragment>
  );
};

export default FormHeader;
