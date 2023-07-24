import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import blankImage from "../../images/plus-sign.png";
import PartyinviteImage from "../../images/invite2.png";
import ContactImage from "../../images/contact-form.webp";
import "./Template.css";
function Template() {
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "16px", color: "#202124" }}>
            Start New Form
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template Gallery
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card">
          <img src={blankImage} alt="not found" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card">
          <img src={PartyinviteImage} alt="not found" className="card_image" />
          <p className="card_title">Party Invite</p>
        </div>
        <div className="card">
          <img src={ContactImage} alt="not found" className="card_image" />
          <p className="card_title">Contact Form</p>
        </div>
      </div>
    </div>
  );
}

export default Template;
