/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CardCours({ course, deleteCard }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 bg-[#F9FAFC] relative">
      <div className="absolute top-0 right-0">
        <button
          type="button"
          className="focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          ...
        </button>
        {showMenu && (
          <div className="bg-white rounded shadow-md py-2 absolute right-0 mt-2">
            <NavLink to={`/edit-course/${course.id}`}>
              <button
                type="button"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-200"
              >
                Modifier
              </button>
            </NavLink>
            <button
              type="button"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => deleteCard(course.id)}
            >
              Supprimer
            </button>
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="text-blue-600  text-xl mb-2">{course.name}</div>
        <p className="text-gray-700 text-base">
          Langage : {course.language}
          <br />
          Description : {course.description}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Dispensé par :
        </span>
        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-600 mr-2">
          {course.lastname} {course.firstname}
        </span>
      </div>
    </div>
  );
}

export default CardCours;