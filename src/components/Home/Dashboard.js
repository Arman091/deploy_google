import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import Forms from "../Form/Forms";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4

function Dashboard() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  let [form, setform] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cancelAddForm = () => {
    handleClose();
    setFormTitle("");
    setFormDescription("");
  };

  const createForm = () => {
    let data = {
      name: formTitle,
      description: formDescription,
      createdBy: uuidv4(), // Use uuidv4 to generate a unique ID
    };
    setform((prevstate) => {
      return { ...prevstate, data };
    });
    navigate("/form/" + data.createdBy);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "teal" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Velocity Forms
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <IconButton
              aria-label="Create new form"
              color="inherit"
              onClick={handleClickOpen}
            >
              <AddIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Creating a new empty form, just add form name and description if you
            want.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Form Name"
            type="text"
            fullWidth
            value={formTitle}
            onChange={(e) => {
              setFormTitle(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Form description"
            type="text"
            fullWidth
            value={formDescription}
            onChange={(e) => {
              setFormDescription(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelAddForm} color="primary">
            Cancel
          </Button>
          <Button onClick={createForm} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ marginTop: "10px" }}>
        {/* Pass the created unique ID to the Forms component */}
        <Forms userId={form.createdBy} />
      </div>
    </div>
  );
}

export default Dashboard;
