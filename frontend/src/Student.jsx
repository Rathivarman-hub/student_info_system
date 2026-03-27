import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import notFound from "./assets/notFound.png";

const Student = () => {
  const [name, setName] = useState("");
  const [reg_no, setreg_no] = useState("");
  const [age, setAge] = useState("");
  const [ph_no, setPh_no] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [stud, setStud] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const apiUrl = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(
    /\/$/,
    ""
  );

  const handleSubmit = () => {
    setError("");
    if (
      name.trim() !== "" &&
      reg_no.trim() !== "" &&
      age.trim() !== "" &&
      ph_no.trim() !== "" &&
      location.trim() !== "" &&
      email.trim() !== ""
    ) {
      fetch(apiUrl + "/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          reg_no,
          age: Number(age),
          ph_no: Number(ph_no),
          location,
          email,
        }),
      })
        .then((res) => {
          if (res.ok) {
            getItems();
            setName("");
            setreg_no("");
            setAge("");
            setPh_no("");
            setLocation("");
            setEmail("");
            setMessage("Student List Add Successfully");
            setTimeout(() => {
              setMessage("");
            }, 3000);
          } else {
            setError("Unable to create student list");
          }
        })
        .catch(() => {
          setError("Unable to create student list");
        });
    }
  };
  useEffect(() => {
    getItems();
  }, []);
 const getItems = () => {
  fetch(`${apiUrl}/student`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then((data) => {
      setStud(data);
    })
    .catch((err) => {
      console.log("Error:", err);
      setError(err.message);
    });
};
  return (
    <>
    <div className="container-fluid px-0 overflow-hidden">
      <div
        className="row p-3 p-md-4 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #533483)",
        }}
      >
        <h1
          className="fw-bold letter-spacing responsive-heading"
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
            fontSize: "calc(1.5rem + 1.5vw)"
          }}
        >
          🎓 Student Information System
        </h1>
      </div>
      
      <div className="container py-4">
        <StudentForm
          name={name}
          setName={setName}
          reg_no={reg_no}
          setreg_no={setreg_no}
          age={age}
          setAge={setAge}
          ph_no={ph_no}
          setPh_no={setPh_no}
          location={location}
          setLocation={setLocation}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          message={message}
          error={error}
        />
        
        <div className="row mt-5">
          <div className="col-12 text-center text-md-start mb-3">
            <h3>
              <span className="badge bg-primary rounded-pill px-4 py-2">
                📋 All Student Records
              </span>
            </h3>
          </div>
          
          <div className="col-12">
            <div className="table-responsive shadow-sm rounded border">
              <table className="table table-bordered table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Register No</th>
                    <th className="text-center">Age</th>
                    <th className="text-center">Mobile No</th>
                    <th className="text-center">Location</th>
                    <th className="text-center">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {stud.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-5">
                        <img src={notFound} style={{ width: "min(300px, 80%)" }} alt="No data found" />
                        <p className="text-muted mt-3">No student records available yet.</p>
                      </td>
                    </tr>
                  ) : (
                    stud.map((item, index) => (
                      <tr key={item._id}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center fw-semibold">{item.name}</td>
                        <td className="text-center font-monospace">{item.reg_no}</td>
                        <td className="text-center">{item.age}</td>
                        <td className="text-center">{item.ph_no}</td>
                        <td className="text-center">{item.location}</td>
                        <td className="text-center">{item.email}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Student;