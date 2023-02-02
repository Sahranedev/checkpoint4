import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function EditCourse() {
  const navigate = useNavigate();
  const [dataCourse, setDataCourse] = useState([]);
  const { courseId } = useParams();
  const onChange = (e) => {
    setDataCourse({
      ...dataCourse,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(dataCourse);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body,
      redirect: "follow",
    };
    if (dataCourse.name && dataCourse.language && dataCourse.description)
      fetch(`http://localhost:5000/api/courses/${courseId}`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          navigate("/course");
        })
        .catch(console.error);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setDataCourse(data));
  }, []);

  return (
    <>
      <Navbar />
      <div>edit course id : {courseId}</div>
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md">
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
            value={JSON.stringify(dataCourse.name)}
            onChange={onChange}
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
            value={dataCourse.language}
            onChange={onChange}
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
            value={dataCourse.description}
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Modifier le cours
        </button>
      </form>
    </>
  );
}

export default EditCourse;
