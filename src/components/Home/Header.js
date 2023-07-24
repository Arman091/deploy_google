import React from "react";
import classes from "./Header.module.css";
import formimage from "../../images/goforms.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../images/avatar860.avif";
import SideBar from "./sidebar.js";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.info}>
       <SideBar/>
        <img src={formimage} alt="" />
        <div className={classes.formsInfo}>Forms</div>
      </div>
      <div className={classes.search}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="search" placeholder="search" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={avatarImage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
