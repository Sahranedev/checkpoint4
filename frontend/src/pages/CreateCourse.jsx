import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { useCurrentUserContext } from "../Context/userContext";

function CreateCourse() {
  const notifySuccess = () => toast.success("Le cours a bien été déclaré");
  const notifyError = () => {
    toast.error(
      "Le cour n'a pas pu être déclaré, veuillez vérifier les informations saisies",
      {
        icon: "🚫",
      }
    );
  };

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
        .then((response) => {
          if (response.status !== 201) {
            notifyError();
          }
          response.text();
        })
        .then((response) => {
          console.warn(response);
          notifySuccess();
          setTimeout(() => {
            navigate("/course");
          }, 1500);
        })

        .catch(console.error);
    }
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-lg font-medium mb-4">Déclarer un nouveau cours</h2>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="name"
          >
            Nom du cours
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
            Langage
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
        <div className="flex justify-around">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Déclarer le cours
          </button>
          <button
            type="button"
            className="bg-red-600 p-2 rounded-lg"
            onClick={() => navigate(-1)}
          >
            Annuler
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateCourse;
