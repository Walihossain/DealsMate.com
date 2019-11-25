import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Signup from "../../Dialogs/Signup";
import Login from "../../Dialogs/Login";
import logo from "../../../assets/logo.png";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        style: {
          height: "130px",
          width: "130px"
        }
      }}
    >
      <MenuItem>
        <Signup
          errors={props.errors}
          onAuth={props.authUser}
          {...props.wrapperprops}
        />
      </MenuItem>
      <MenuItem>
        <Login
          errors={props.errors}
          onAuth={props.authUser}
          {...props.wrapperprops}
        />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar style={{ background: "#eee" }}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="h1"
            color="inherit"
            style={{ flex: 1 }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "auto", width: "300px", paddingLeft: "20px" }}
            />
          </Typography>

          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Signup
              errors={props.errors}
              onAuth={props.authUser}
              {...props.wrapperprops}
            />

            <Login
              errors={props.errors}
              onAuth={props.authUser}
              {...props.wrapperprops}
            />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

// import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Signup from "../../Dialogs/Signup";
// import Login from "../../Dialogs/Login";
// import logo from "../../../assets/logo.png";
// import { connect } from "react-redux";
// import { authUser } from "../../../stores/actions/auth";

// class Header extends Component {
//   render() {
//     const { authUser, errors } = this.props;
//     console.log("These are Props Header");
//     console.log(this.props);
//     return (
//       <AppBar position="static">
//         <Toolbar style={{ background: "#eee" }}>
//           <Typography
//             variant="h6"
//             component="h1"
//             color="inherit"
//             style={{ flex: 1 }}
//           >
//             <img
//               src={logo}
//               alt="logo"
//               style={{ height: "auto", width: "300px", paddingLeft: "50px" }}
//             />
//           </Typography>
//           <Signup errors={errors} onAuth={authUser} {...this.props} />
//           <Login errors={errors} onAuth={authUser} {...this.props} />
//         </Toolbar>
//       </AppBar>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     currentUser: state.currentUser,
//     errors: state.errors
//   };
// }

// export default connect(
//   mapStateToProps,
//   { authUser }
// )(Header);
