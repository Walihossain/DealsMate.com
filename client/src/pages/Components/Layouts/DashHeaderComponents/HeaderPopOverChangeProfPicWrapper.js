import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import { connect } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import AddPhoto from "../../../Dialogs/AddPhoto";
import Fab from "@material-ui/core/Fab";
import { apiCallWithHeader } from "../../../../services/apiHeaders";
// import { loadCurrentUserImage } from "../../../../stores/actions/getUserImage";

const styles = theme => ({
  dialogPaper: {
    minHeight: "40vh",
    maxHeight: "73vh",
    minWidth: "45vw",
    maxWidth: "45vw",
    display: "flex",
    textAlign: "center",
    margin: "10px",
    padding: 20
  },
  formWidth: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10
  },
  textFieldHeader: {
    margin: 0,
    fontWeight: 600
  },
  FormControl: {
    width: "60%"
  },
  buttonStyles: {
    width: "200px",
    background: "#DF1B1B",
    marginTop: "35px",
    color: "white"
  }
});

class HeaderPopOverChangeProfPicWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, name: "", picture: null };
    this.handleChange = this.handleChange.bind(this);
    this.handlePhotoLoading = this.handlePhotoLoading.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const type = "uploadPicture";
    const formData = new FormData();
    //formData.append("name", this.state.name);
    formData.append("picture", this.state.picture.file);
    const headers = {
      headers: {
        "content-type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };
    apiCallWithHeader("post", `/${type}`, formData, headers).then(res => {
      if (res.status === 200) {
        this.handleToggle();
        console.log("The response has come back");
        console.log(res);
        this.props.loadProfilePicUrl(headers);
      } else {
        console.log("error");
      }
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleToggle(e) {
    this.setState({ open: !this.state.open });
  }

  handlePhotoLoading(photo) {
    const newPhoto = photo;
    this.setState(
      {
        picture: newPhoto
      },
      () => {
        // console.log(this.state);
        console.log(this.state.picture);
        // console.log(this.state.cover);
      }
    );
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    console.log("HeaderPopOverChangeProfPicWrapper");
    console.log(this.props);
    return (
      <div>
        <Button variant="text" onClick={this.handleToggle} mini>
          Change Photo
        </Button>
        <Dialog
          classes={
            ({ paper: classes.dialogContainer }, { paper: classes.dialogPaper })
          }
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{ padding: "10px" }}>
            <h3 style={{ textAlign: "center" }}>Change Your Photo</h3>
          </DialogTitle>

          <form
            action="/"
            method="POST"
            onSubmit={this.handleSubmit}
            className={classes.formWidth}
          >
            {/* <p className={classes.textFieldHeader}>Add a title:</p>
              <TextField
                id="outlined-link"
                label="Enter Name"
                value={name}
                type="text"
                name="name"
                margin="normal"
                variant="outlined"
                className={classes.FormControl}
                onChange={this.handleChange}
              /> */}
            <br />
            <p className={classes.textFieldHeader}>Click below to upload</p>
            <div>
              <AddPhoto onPhotoUpload={this.handlePhotoLoading} />
            </div>
            <DialogActions>
              <Fab
                type="submit"
                label="Submit"
                variant="extended"
                size="large"
                className={classes.buttonStyles}
              >
                Submit Photo
              </Fab>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderPopOverChangeProfPicWrapper);

// export default connect(loadCurrentUserImage)(
//   withStyles(styles)(HeaderPopOverChangeProfPicWrapper)
// );
