import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupImage from "../../images/Group.jpg";
import StorageIcon from "@mui/icons-material/Storage";
import { useNavigate } from "react-router-dom";
import "./mainBody.css";

function RecentForm(props) {
  const navigate = useNavigate();
  const handleOpenForm = () => {
    let id = props.doc_id;
    navigate("/viewForm/" + id);
  };

  return (
    <>
      <div className="doc_card" onClick={handleOpenForm}>
        <img src={GroupImage} className="doc_image" alt="noT Found" />
        <div className="doc_card_content">
          <h5>Form Name:{props.doc_name}</h5>
          <h5>Title:{props.doc_desc}</h5>
          <h5>Form ID:{props.doc_id}</h5>
          <div
            className="doc_content"
            style={{ fontSize: "12px", color: "grey" }}
          >
            <div className="content_left">
              <StorageIcon
                style={{
                  color: "white",
                  fontSize: "12px",
                  backgroundColor: "#6E2594",
                  padding: "3px",
                  marginRight: "3px",
                  borderRadius: "2px",
                }}
              />
            </div>
            <MoreVertIcon style={{ fontSize: "16px", color: "grey" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentForm;
