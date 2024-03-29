import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../../assets/logo.png";
import HeaderButtons from "./DashHeaderComponents/HeaderButtons";
import HeaderProfile from "./DashHeaderComponents/HeaderProfile";
import DashHeader from "./DashHeader";
import { connect } from "react-redux";
import { loadNotifications } from "../../../stores/actions/getNotifications";
import { SignOutButton } from "./DashHeaderComponents/SignOut";
import { SignOutAction } from "../../../stores/actions/SignOut";
import { loadCurrentUserImage } from "../../../stores/actions/getUserImage";
import { configureStore } from "../../../stores";

const store = configureStore();

class DashHeaderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Expand did mount");
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };
    this.props.loadCurrentUserImage(headers);
    this.props.loadNotifications(headers);
    setInterval(() => {
      console.log("notification being hit");
      this.props.loadNotifications(headers);
    }, 5000 * 60);
  }

  componentWillUnmount() {
    clearInterval();
  }

  signOut() {
    console.log("signOutisclicked");
    this.props.SignOutAction();
  }

  render() {
    const styleToolbar = {
      background: "#FFFFFF",
      display: "flex",
      alignItem: "center",
      justifyContent: "space-between"
    };

    const styleToolbarRight = {
      display: "flex",
      alignItem: "center",
      justifyContent: "center"
    };
    console.log("DashHeader Props");
    console.log(this.props);
    // console.log("DashHeader Props user");
    // console.log(this.props.currentUser.user);
    return (
      <div>
        <DashHeader
          notifications={this.props.currentNotifications.notifications}
          loadNotifications={this.props.loadNotifications}
          shoppingList={this.props.currentShoppingList.list}
          store={store}
          user={this.props.currentUser.user.body.user}
          profilePicUrl={this.props.currentProfilePicUrl.userImageUrl}
          profilePicUrlTime={this.props.currentProfilePicUrl.userImageDate}
          loadProfilePicUrl={this.props.loadCurrentUserImage}
        />
      </div>
      // <AppBar position="static">
      //   <Toolbar style={styleToolbar}>
      //     <div>
      //       <img
      //         src={logo}
      //         alt="logo"
      //         style={{ height: "auto", width: "300px", paddingLeft: "50px" }}
      //       />
      //     </div>
      //     <div style={styleToolbarRight}>
      //       <HeaderButtons
      //         notifications={this.props.currentNotifications.notifications}
      //         loadNotifications={this.props.loadNotifications}
      //         shoppingList={this.props.currentShoppingList.list}
      //         store={store}
      //       />
      //       <HeaderProfile
      //         user={this.props.currentUser.user.body.user}
      //         profilePicUrl={this.props.currentProfilePicUrl.userImageUrl}
      //         profilePicUrlTime={this.props.currentProfilePicUrl.userImageDate}
      //         loadProfilePicUrl={this.props.loadCurrentUserImage}
      //       />
      //     </div>
      //   </Toolbar>
      // </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNotifications: state.currentNotifications,
    currentProfilePicUrl: state.currentProfilePicUrl
  };
}

export default connect(
  mapStateToProps,
  { loadNotifications, SignOutAction, loadCurrentUserImage }
)(DashHeaderWrapper);
