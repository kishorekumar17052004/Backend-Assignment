import { studentModel } from "../model/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    const { studentname, studentage, email, studentcourse } = req.body;

    if (!studentname || !studentage || !email || !studentcourse) {
      return res.status(400).json({ msg: "please fill fields" });
    }

    const checkEmail = await studentModel.findOne({ email });

    if (checkEmail) {
      return res.status(409).json({ msg: "This email already exist" });
    }

    const studentData = await studentModel.create({
      studentname,
      studentage,
      email,
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
    res
      .status(200)
      .json({ msg: "get all student successfully", getStudentData });
  } catch (error) {
    res.status(500).json({ msg: "internal server get error", error });
  }
};

export const getOneData = async (req, res) => {
  try {
    const { id } = req.params;

    const singleStudent = await studentModel.findById(id);

    if (!singleStudent) {
      return res.status(404).json({ msg: "student not found" });
    }

    res
      .status(200)
      .json({ msg: "successfully get singelStudent ", singleStudent });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "internal server get singleData error", error });
  }
};

export const updateData = async (req, res) => {
  try {
    const { studentname, studentage, email, studentcourse } = req.body;

    const { id } = req.params;

    if (!studentname || !studentage || !email || !studentcourse) {
      return res.status(400).json({ msg: "please fill fields" });
    }

    const existingEmail = await studentModel.findOne({
      email,
      _id: { $ne: id },
    });

    if (existingEmail) {
      return res.status(409).json({ msg: "This email already exist" });
    }

    const updateStudents = await studentModel.findByIdAndUpdate(
      id,
      {
        studentname,
        studentage,
        email,
        studentcourse,
      },
      { new: true, runValidators: true },
    );

    if (!updateStudents) {
      return res.status(404).json({ msg: "student not found" });
    }

    res.status(200).json({ msg: "update Successfully", updateStudents });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "internal server get singleData error", error });
  }
};

export const removeData = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await studentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ msg: "student not found" });
    }

    res
      .status(200)
      .json({ msg: "student removed successfully", deletedStudent });
  } catch (error) {
    res.status(500).json({ msg: "internal server delete error", error });
  }
};
