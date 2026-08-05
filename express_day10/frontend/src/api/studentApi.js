import api from "./axios";

export const getStudents = () => api.get("/info");
export const getStudent = (id) => api.get(`/info/${id}`);
export const createStudent = (student) => api.post("/create", student);
export const updateStudent = (id, student) => api.put(`/update/${id}`, student);
export const deleteStudent = (id) => api.delete(`/remove/${id}`);
