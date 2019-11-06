import React from "react";
import ProfilePicture from "../../../../assets/profiledemopic.png";
import HeaderPopOverProfile from "./HeaderPopOverProfile";


const styleContainer = {
  display: "flex",
  alignItems: "center",
  color: "black",
  paddingLeft: "50px"
};

const stylePic = {
  height: "50px",
  width: "auto",
  //border: "2px solid black",
  borderRadius: "50%",
  margin: "0 10px"
};

const styleName = {
  margin: "0 5px"
};
const HeaderProfile = props => {
  console.log("Header Profile props");
  console.log(props);
  return (
    <div style={styleContainer}>
      <HeaderPopOverProfile name={props.user.name} />
      {/* <img src={ProfilePicture} alt="profilePic" style={stylePic} /> */}
      {/* <p style={styleName}>
        {props.user.name ? props.user.name : "Smiling Guy"}
      </p> */}
    </div>
  );
};

export default HeaderProfile;
