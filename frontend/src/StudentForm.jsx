import React from "react";

const StudentForm = ({
  name,
  setName,
  reg_no,
  setreg_no,
  age,
  setAge,
  ph_no,
  setPh_no,
  location,
  setLocation,
  email,
  setEmail,
  handleSubmit,
  message,
  error,
}) => {
  return (
    <div className="row mt-2">
      <h3>
        <span className="badge bg-secondary rounded-pill px-4 py-2">
          🎓 Student Enrollment
        </span>
      </h3>

      {message && <p className="text-success">{message}</p>}

      <div className="form-group d-flex flex-column gap-2 w-25 mx-auto">
        <label className="form-label text-dark fw-semibold">
          Name
          <input
            id="name"
            type="text"
            placeholder="e.g. Varun"
            className="form-control mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="form-label text-dark fw-semibold">
          Register Number
          <input
            id="reg_no"
            type="text"
            placeholder="e.g. 8208E23BSR044"
            className="form-control mt-1"
            value={reg_no}
            onChange={(e) => setreg_no(e.target.value)}
          />
        </label>

        <label className="form-label text-dark fw-semibold">
          Age
          <input
            id="age"
            type="number"
            placeholder="e.g. 20"
            className="form-control mt-1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label className="form-label text-dark fw-semibold">
          Mobile Number
          <input
            id="ph_no"
            type="tel"
            placeholder="e.g. 9874563210"
            className="form-control  mt-1"
            value={ph_no}
            onChange={(e) => setPh_no(e.target.value)}
          />
        </label>

        <label className="form-label text-dark fw-semibold">
          Place
          <input
            id="location"
            type="text"
            placeholder="e.g. Karaikal"
            className="form-control  mt-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label className="form-label text-dark fw-semibold">
          E-mail
          <input
            id="email"
            type="email"
            placeholder="varun@gmail.com"
            className="form-control  mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default StudentForm;
