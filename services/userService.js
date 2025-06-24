import { Op, where } from "sequelize";
import User from "../models/userModel.js";

export const saveUser_ = async(data)=>{
    const { email, mobile } = data;

  // Check if email or mobile already exists
  const existingUser = await User.findOne({
    where: {
      [Op.or]: [{ email }, { mobile }],
    },
  });

  if (existingUser) {
    throw new Error('Email or mobile already exists');
  }

  // Save the new user
  return await User.create(data);
}; 

export const getUser_ = async()=>{
    return await User.findAll();
}

export const deleteUser_  = async(id)=>{
    return await User.destroy(id);
}

export const updateUser_ = async(data , id)=>{
    return await User.update(data,id);
}
export const getUserById_ = async (id) => {
  return await User.findByPk(id);
}
