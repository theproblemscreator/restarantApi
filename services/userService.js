import User from '../models/userModel.js'

export const fetchAllUsers_ = async()=>{
    return await User.findAll();
}

export const saveUser_ = async(data)=>{
    return await User.create(data);
};

export const fetchByEmail_ = async (email) => {
    return await User.findOne({ where: { email } });
};