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
      <div className="flex justify-center">
        <h1 className="font-bold text-blue-600 text-xl">Mon Profile</h1>
      </div>
      <div className="flex justify-center">
        <ProfileCard />
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-col justify-center items-center w-3/4 md:w-6/12">
          {courses
            .filter((course) => course.professor_id === professor.id)
            .map((course) => (
              <CardCours key={course.id} course={course} />
            ))}
        </ul>
      </div>
    </>
  );
}

export default Profile;
