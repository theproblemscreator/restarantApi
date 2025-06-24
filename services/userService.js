import User from "../models/userModel.js";

export const saveUser_ = async(data)=>{
     return await User.create(data);
} 

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
