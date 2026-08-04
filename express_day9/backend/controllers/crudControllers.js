import crudModel from "../model/crudModel.js";

//! post 
export const createData = async (req, res) => {
  try {
    const { name, email, city, mobile } = req.body;

    const checkField = !name || !email || !city || !mobile;

    if (checkField) {
      return res.status(400).json({ msg: "please fill the Fields" });
    }

    const checkEmail = await crudModel.findOne({ email });

    if (checkEmail) {
     return res.status(409).json({ mgs: "Email Already Exist" });
    }

    const checkMobile = await crudModel.findOne({mobile})

    if (checkMobile) {
      return res.status(409).json({ mgs: "Mobile Number Already Exist" });
    }

    const userData = await crudModel.create({ name, email, city, mobile })

    res.status(201).json({ msg: "Successfully Created",userData });
  } catch (error) {
    res.status(500).json({msg:"Intrenal Server Error",error})
  }
};

//! get
export const getData = async (_, res) => {
  try {
     const userData = await crudModel.find()

     res.status(200).json({msg:"Successfully get UserData",userData})

  } catch (error) {
    res.status(500).json({msg:"Intrenal Server Error",error}) 
  }
};
