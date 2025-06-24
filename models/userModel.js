import sequelize from "../config.js/db.js";
import { DataTypes } from "sequelize";
  
const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
  
  });

export default User;