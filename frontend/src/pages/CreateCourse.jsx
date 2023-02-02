import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCurrentUserContext } from "../Context/userContext";

function CreateCourse() {
  const { professor } = useCurrentUserContext();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    name: "",
    language: "",
    description: "",
    professor_id: professor.id,
  });

  const handleInputChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(course);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (course.name && course.description && course.language) {
      fetch("http://localhost:5000/api/courses", requestOptions)
        .then((response) => response.text())
        .then(() => {
          navigate("/course");
        })
        .catch(console.error);
    }
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-lg font-medium mb-4">Create a New Course</h2>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="name"
          >
            Course Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-400 p-2 rounded-lg w-full"
            value={course.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="language"
          >
            Language
          </label>
          <input
            type="text"
            name="language"
            id="language"
            className="border border-gray-400 p-2 rounded-lg w-full"
            value={course.language}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={3}
            className="border border-gray-400 p-2 rounded-lg w-full"
            value={course.description}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Create Course
        </button>
      </form>
    </>
  );
}

export default CreateCourse;
