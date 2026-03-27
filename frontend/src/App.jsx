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
    <div className="bg-white" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-end p-2 border-bottom">
        <button className="btn btn-outline-danger btn-sm fw-bold" onClick={handleClose}>
          ✕ Close Application
        </button>
      </div>
      <Student />
    </div>
  ) : (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center p-4"
      style={{ 
        minHeight: "100vh", 
        background: "radial-gradient(circle, #f0f4ff 0%, #d9e2ff 100%)" 
      }}
    >
      <h1 className="fw-bold mb-3 landing-title" style={{ fontSize: "calc(1.8rem + 2vw)" }}>
        Welcome to Student Management App 🎓
      </h1>
      <p className="text-muted mb-4 lead" style={{ maxWidth: "600px" }}>
        Efficiently manage, track, and organize your student records with our modern Information System.
      </p>
      <button 
        className="btn btn-primary px-4 py-3 shadow-lg rounded-pill fw-bold" 
        onClick={handleShow}
        style={{ transition: "transform 0.2s" }}
      >
        📋 View Student Records
      </button>
    </div>
  );
};

export default App;