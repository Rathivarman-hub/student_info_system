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

      <div className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto p-4 shadow-sm rounded bg-light border">
        {message && <p className="text-success text-center mb-3">{message}</p>}
        {error && <p className="text-danger text-center mb-3">{error}</p>}
        
        <div className="d-flex flex-column gap-3">
          <div className="form-group">
            <label className="form-label text-dark fw-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Varun"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label text-dark fw-semibold" htmlFor="reg_no">
              Register Number
            </label>
            <input
              id="reg_no"
              type="text"
              placeholder="e.g. 8208E23BSR044"
              className="form-control"
              value={reg_no}
              onChange={(e) => setreg_no(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label text-dark fw-semibold" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="e.g. 20"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label text-dark fw-semibold" htmlFor="ph_no">
              Mobile Number
            </label>
            <input
              id="ph_no"
              type="tel"
              placeholder="e.g. 9874563210"
              className="form-control"
              value={ph_no}
              onChange={(e) => setPh_no(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label text-dark fw-semibold" htmlFor="location">
              Place
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g. Karaikal"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label text-dark fw-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="varun@gmail.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100 py-2 mt-2 fw-bold" onClick={handleSubmit}>
            Submit Student Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;