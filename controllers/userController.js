import { saveUser_, getUser_, deleteUser_, updateUser_, getUserById_ } from '../services/userService.js'

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await saveUser_(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

export const fetchUsers = async (req, res) => {
    try {

        const response = await getUser_();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

export const deleteUsers = async (req, res) => {
    try {

        const { id } = req.params;
        const user = await getUserById_(id);
        if (!user) res.status(401).json({ message: "Not Valid User" });

        await deleteUser_({ where: { id } });
        res.status(200).json(user);
    } catch (error) {
               res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

export const updateUsers = async (req, res) => {
    try {
        const userData = req.body;

        const { id } = req.params;
        const user = await getUserById_(id);

        if (!user) return res.status(404).json({ message: "User Not Found" });

        await updateUser_(userData, { where: { id } });

        res.status(201).json({ message: "User is Updated " });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

export const getUserById = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await getUserById_(id);
        if(!user) res.status(404).json({message : "User Not Found"});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message : "Something Went Wrong",error : error.message});
    }
}
