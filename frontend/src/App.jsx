import { useState } from "react";
import Student from "./Student";

const App = () => {
  const [showStudent, setShowStudent] = useState(
    sessionStorage.getItem("showStudent") === "true",
  );

  const handleShow = () => {
    sessionStorage.setItem("showStudent", "true");
    setShowStudent(true);
  };

  const handleClose = () => {
    sessionStorage.removeItem("showStudent");
    setShowStudent(false);
  };

  return showStudent ? (
    <div className="bg-white p-2" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-end mb-2">
        <button className="btn btn-danger btn-sm" onClick={handleClose}>
          ✕ Close
        </button>
      </div>
      <Student />
    </div>
  ) : (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "#f0f4ff" }}
    >
      <h1 className="fw-bold mb-3">Welcome to Student Management App 🎓</h1>
      <p className="text-muted mb-4">Manage your student records easily.</p>
      <button className="btn btn-primary px-2 py-3 shadow" onClick={handleShow}>
        📋 View Student Records
      </button>
    </div>
  );
};

export default App;
