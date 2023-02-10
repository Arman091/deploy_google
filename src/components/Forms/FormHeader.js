import { Fragment } from "react";

import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
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

          <span style={{ fontSize: "19px", fontWeight: "600" }}>
            All Changes Saved in Drive
          </span>
        </div>
        <div className="form_header_right">
          <IconButton>
            <ColorLensIcon size="small" className="form_header_icon" />
          </IconButton>
          <VisibilityIcon />
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="form_header_icon" />
          </IconButton>
        </div>
      </div>
    </Fragment>
  );
};

export default FormHeader;
