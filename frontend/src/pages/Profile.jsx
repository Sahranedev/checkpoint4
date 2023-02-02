import React from "react";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <h1>Mon Profile</h1>
      <ProfileCard />
    </>
  );
}

export default Profile;
