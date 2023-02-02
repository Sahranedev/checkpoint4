import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import CardCours from "../components/CardCours";
import Navbar from "../components/Navbar";

function Cours() {
  const [courses, setCourses] = useState([]);
  const [showJavascriptCourses, setShowJavascriptCourses] = useState(false);

  const handleJavascriptCourses = () => {
    setShowJavascriptCourses(!showJavascriptCourses);
  };
  const fetchCourses = () => {
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCard = (id) => {
    fetch(`http://localhost:5000/api/courses/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then(() => {
        fetchCourses();
      });
  };

  useEffect(() => {
    deleteCard();
  }, [courses?.length]);
  return (
    <>
      <Navbar />
      <h1>Les cours</h1>
      <NavLink to="/create-course">
        <div className="flex justify-center">
          <Button className="ml-3" color="green">
            Déclarer un cours
          </Button>{" "}
        </div>
        <br />
      </NavLink>
      <div className="flex justify-around">
        <Button
          className="mt-2"
          size="sm"
          color="blue"
          onClick={handleJavascriptCourses}
        >
          JavaScript
        </Button>
        <Button className="ml-2" size="sm" color="gray" onClick="">
          PHP
        </Button>
      </div>
      <ul className="ml-5">
        {courses
          .filter(
            (course) =>
              !showJavascriptCourses || course.language === "Javascript"
          )
          .map((course) => (
            <CardCours
              key={course.id}
              course={course}
              deleteCard={deleteCard}
            />
          ))}
      </ul>
    </>
  );
}

export default Cours;
