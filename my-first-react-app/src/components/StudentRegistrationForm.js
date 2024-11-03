import React, { useState } from "react";

const StudentRegistrationForm = () => {
  //Manage the input state
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [consent, setConsent] = useState("");
  //Handle Change
  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const handleConsentChange = (e) => {
    setConsent(e.target.value);
  };
  //Handle Submit
  const handleSubmit = (e) => {
    //prevent browser default refresh
    e.preventDefault();
    console.log({ studentName, age, course, consent });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={studentName} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>Course:</label>
        <select value={course} onChange={handleCourseChange}>
          <option value="Science">Science</option>
          <option value="Maths">Maths</option>
          <option value="Bio">Bio</option>
        </select>
      </div>
      <div>
        <label>Consent:</label>
        <input
          type="checkbox"
          checked={consent}
          onChange={handleConsentChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistrationForm;
