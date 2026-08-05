import React, { useEffect, useState } from "react";
import { createStudent, deleteStudent, getStudents, updateStudent } from "../api/studentApi";

const initialForm = {
  studentname: "",
  email: "",
  studentage: "",
  studentcourse: "",
};

const Students = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const fetchStudents = async () => {
    try {
      const { data } = await getStudents();
      setStudents(data.getStudentData || []);
    } catch (error) {
      setMessage("Unable to load students. Check backend connection.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.studentname || !form.email || !form.studentage || !form.studentcourse) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      if (editingId) {
        await updateStudent(editingId, form);
        setMessage("Student updated successfully.");
      } else {
        await createStudent(form);
        setMessage("Student created successfully.");
      }
      setForm(initialForm);
      setEditingId(null);
      fetchStudents();
    } catch (error) {
      setMessage(error.response?.data?.msg || "Save failed. Please try again.");
    }
  };

  const handleEdit = (student) => {
    setForm({
      studentname: student.studentname,
      email: student.email,
      studentage: student.studentage,
      studentcourse: student.studentcourse,
    });
    setEditingId(student._id);
    setMessage("Editing student. Change values and submit.");
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      setMessage("Student deleted successfully.");
      fetchStudents();
    } catch (error) {
      setMessage("Delete failed. Please try again.");
    }
  };

  const handleCancel = () => {
    setForm(initialForm);
    setEditingId(null);
    setMessage("");
  };

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1>Student Manager</h1>

      {message && (
        <div style={{ marginBottom: 16, color: "#0f5257" }}>{message}</div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, marginBottom: 24 }}>
        <input
          name="studentname"
          value={form.studentname}
          onChange={handleChange}
          placeholder="Student Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="number"
          name="studentage"
          value={form.studentage}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          name="studentcourse"
          value={form.studentcourse}
          onChange={handleChange}
          placeholder="Course"
        />
        <div>
          <button type="submit" style={{ marginRight: 10 }}>
            {editingId ? "Update Student" : "Add Student"}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: 8 }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: 8 }}>Email</th>
              <th style={{ border: "1px solid #ddd", padding: 8 }}>Age</th>
              <th style={{ border: "1px solid #ddd", padding: 8 }}>Course</th>
              <th style={{ border: "1px solid #ddd", padding: 8 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{student.studentname}</td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{student.email}</td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{student.studentage}</td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{student.studentcourse}</td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  <button onClick={() => handleEdit(student)} style={{ marginRight: 8 }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Students;
