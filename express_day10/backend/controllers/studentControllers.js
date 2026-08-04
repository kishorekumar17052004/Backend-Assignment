import { studentModel } from "../model/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    const { studentname, studentage, studentemail, studentcourse } = req.body;

    if (!studentname || !studentage || !studentemail || !studentcourse) {
      return res.status(400).json({ msg: "please fill fields" });
    }

    const checkEmail = await studentModel.findOne({ email: studentemail });

    if (checkEmail) {
      return res.status(409).json({ msg: "This email already exist" });
    }

    const studentData = await studentModel.create({
      studentname,
      studentage,
      email: studentemail,
      studentcourse,
    });

    res.status(200).json({ msg: "student Create Successfully", studentData });
  } catch (error) {
    res.status(500).json({ msg: "internal server post error", error });
  }
};

export const getStudent = async (_, res) => {
  try {
    const getStudentData = await studentModel.find();
    res.status(200).json({msg:"get all student successfully",getStudentData})
  } catch (error) {
    res.status(500).json({ msg: "internal server get error", error });
  }
};
