import styles from "./Header.module.css";
import { IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import SideBar from "./sidebar";
function Header(props) {
  const formHandler = (e) => {
    alert(props.forms);
  };

  return (
    <div className={styles.header}>
      <SideBar />
      <div className={styles.header_info}>
        {/* single EventHandler */}
        <IconButton onClick={formHandler}>
          <DescriptionIcon color="secondary" />
          <span className={styles.info}>Forms</span>
        </IconButton>
      </div>
      <div className={styles.search}>
        <SearchIcon
          sx={{
            position: "relative",
            top: "8px",
            size: "8em",
          }}
        />
        <input type="search" placeholder="search" />
      </div>
      <div className={styles.right}>
        <IconButton>
          <AppsIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
