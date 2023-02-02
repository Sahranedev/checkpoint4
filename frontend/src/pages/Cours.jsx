import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import CardCours from "../components/CardCours";
import Navbar from "../components/Navbar";

function Cours() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const deleteCard = (id) => {
    fetch(`http://localhost:5000/api/courses/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        setCourses(result);
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
        <Button color="green">Déclarer un cours</Button>
      </NavLink>
      <ul className="">
        {courses.map((course) => (
          <CardCours key={course.id} course={course} deleteCard={deleteCard} />
        ))}
      </ul>
    </>
  );
}

export default Cours;
