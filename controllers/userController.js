import {fetchAllUsers_,saveUser_} from '../services/userService.js'

export const saveUser = async(req,res)=>{
    try {
        const formData = req.body;
        const response = await saveUser_(formData);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({message : "Something Went Wrong" , error : error.message});
    }
}

export const fetchAllUsers = async(req,res)=>{
     try {
        const response =  await fetchAllUsers_();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({message : "Something Went Wrong"});
    }
}