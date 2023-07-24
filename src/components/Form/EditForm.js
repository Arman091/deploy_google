import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Close,
  Palette,
  Send,
  Settings,
  StarBorder,
  ViewList,
} from "@mui/icons-material";

// Dummy form record data
const dummyFormRecord = {
  _id: "unique-form-id-123",
  name: "Dummy Form",
  createdBy: "user-id-123",
};

function EditForm(props) {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openOfAlert, setOpenOfAlert] = React.useState(false);

  // Simulated user data
  const simulatedUser = {
    id: "user-id-123",
  };

  // Simulated form details
  const [formDetails, setFormDetails] = React.useState({});

  React.useEffect(() => {
    // Simulate fetching form data from the server based on the form ID
    // In this example, I'm using dummyFormRecord as the fetched data
    setFormDetails(dummyFormRecord);
  }, []);

  const clipToClipboard = () => {
    navigator.clipboard.writeText(
      window.location.origin + "/s/" + formDetails._id
    );
    handleClickOfAlert();
    handleClose();
  };

  const handleClickOfAlert = () => {
    setOpenOfAlert(true);
  };

  const handleCloseOfAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenOfAlert(false);
  };

  function sendForm() {
    handleClickOpen();
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {formDetails.createdBy === simulatedUser.id ? (
        <div>
          <AppBar
            position="static"
            style={{ backgroundColor: "white" }}
            elevation={2}
          >
            <Grid container alignItems="center" sx={{ py: 1 }}>
              <Grid item>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Rohit Saini's form"
                  sx={{ color: "#140078" }}
                >
                  <ViewList />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ mt: "8.5px", color: "black" }}
                >
                  {formDetails.name}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton aria-label="Rohit Saini's form">
                  <StarBorder />
                </IconButton>
              </Grid>
              <Grid item>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Questions" />
                  <Tab label="Responses" />
                </Tabs>
              </Grid>
              <Grid item>
                <IconButton aria-label="search" onClick={sendForm}>
                  <Send />
                </IconButton>
                <IconButton aria-label="search">
                  <Palette />
                </IconButton>

                <IconButton aria-label="search">
                  <Settings />
                </IconButton>
                <IconButton aria-label="display more actions" edge="end">
                  <AccountCircle />
                </IconButton>
              </Grid>
            </Grid>
          </AppBar>
          {/* ... The rest of the component ... */}
        </div>
      ) : (
        <p>you're not the owner of the form</p>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openOfAlert}
        autoHideDuration={3000}
        onClose={handleCloseOfAlert}
        message="Copied to clipboard"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseOfAlert}
            >
              <Close fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default EditForm;
