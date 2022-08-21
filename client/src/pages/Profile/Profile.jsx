import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile mobile-container">
     
      <div className="Profile-center">
      <ProfileCard location = 'profilePage'/>
      <div className="infocardContainer">
      <InfoCard />
      </div>
      <PostSide/>
      </div>
    
    </div>
  );
};

export default Profile;
