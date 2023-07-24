import React from "react";
import classes from "./Header.module.css";
import formimage from "./images/goforms.png";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import avatarImage from "./images/form.png";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.info}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={formimage} alt="No image" />
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
