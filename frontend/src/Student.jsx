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
  const apiUrl = import.meta.env.VITE_API_URL;

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
    fetch(apiUrl + "/student")
      .then((res) => res.json())
      .then((res) => {
        setStud(res);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
  return (
    <>
      <div
        className="row p-2 text-white text-center mt-1"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #533483)",
        }}
      >
        <h1
          className="fw-bold letter-spacing"
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
          }}
        >
          🎓 Student Information System
        </h1>
      </div>
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
      <div className="row mt-4">
        <h3>
          <span className="badge bg-primary rounded-pill px-4 py-2 mt-5">
            📋 All Student Records
          </span>
        </h3>
        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover ">
            <thead className="table-dark">
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Name</th>
                <th className="text-center">Register Number</th>
                <th className="text-center">Age</th>
                <th className="text-center">Mobile Number</th>
                <th className="text-center">Location</th>
                <th className="text-center">Email</th>
              </tr>
            </thead>
            <tbody>
              {stud.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <img src={notFound} style={{ width: "250px" }} alt="" />
                  </td>
                </tr>
              ) : (
                stud.map((item, index) => (
                  <tr key={item._id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.reg_no}</td>
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
    </>
  );
};

export default Student;
