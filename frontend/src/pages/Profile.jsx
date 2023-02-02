import React, { useEffect, useState } from "react";
import CardCours from "../components/CardCours";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/Navbar";
import { useCurrentUserContext } from "../Context/userContext";

function Profile() {
  const { professor } = useCurrentUserContext();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses`)
      .then((response) => response.json())
      .then((result) => {
        setCourses(result);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <h1>Mon Profile</h1>
      <ProfileCard />
      <ul className="ml-5">
        {courses
          .filter((course) => course.professor_id === professor.id)
          .map((course) => (
            <CardCours key={course.id} course={course} />
          ))}
      </ul>
    </>
  );
}

export default Profile;
