import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Formicon from "../../images/goforms.png";
import "./FormHeader.css";
import { useParams } from "react-router";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./FormHeader.css";
import avatarImage from "../../images/avatar860.avif";
const FormHeader = () => {
  const { id } = useParams();
  return (
    <>
      <div className="form_header">
        <div className="form_header_left">
          <img src={Formicon} alt="Error" className="form_header_left_image" />
          <input type="text" placeholder={id} className="form_name"></input>
          <FolderOpenIcon className="form_header_icon" />
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
          <Button variant="contained" color="primary" href="#contained-buttons">
            Send
          </Button>
          <IconButton>
            <MoreVertIcon className="form_header_icon" />
          </IconButton>
          <IconButton>
            <Avatar
              style={{ height: "40px", width: "40px" }}
              src={avatarImage}
            />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default FormHeader;
