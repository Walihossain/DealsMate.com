import React, { Component } from "react";
import { connect } from "react-redux";
import { SignOutButton } from "./SignOut";
import { SignOutAction } from "../../../../stores/actions/SignOut";
// import { configureStore } from "../../../stores";

// const store = configureStore();

class HeaderPopOverSignOutWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOut() {
    console.log("signOutisclicked");
    this.props.SignOutAction();
  }

  render() {
    return (
      <div>
        <SignOutButton signOut={this.signOut.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNotifications: state.currentNotifications
  };
}

export default connect(
  mapStateToProps,
  { SignOutAction }
)(HeaderPopOverSignOutWrapper);
