import StorageIcon from "@mui/icons-material/Storage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from "@mui/material";
import RecentForm from "./RecentForms";
import { useSelector } from "react-redux";
import "./mainBody.css";
function Mainbody() {
  const forms = useSelector((state) => state);
  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div
          className="mainbody_top_left"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          Recent Forms
        </div>
        <div className="mainbody_top_right">
          <div
            className="mainbody_top_center"
            style={{ fontSize: "14px", marginRight: "125px" }}
          >
            Owned by anyone <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontsize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div className="main_body_forms">
        {forms.map((form, index) => (
          <RecentForm doc_name={form.doc_name} doc_desc={form.doc_desc} doc_id={form.form_id } key={index} />
        ))}
      </div>
    </div>
  );
}

export default Mainbody;
