
import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const User = sequelize.define('users', {
    fname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: {
                args: [1, 25],
                msg: "First name must be between 1 and 25 characters."
            },
            is: {
                args: /^[a-zA-Z]+$/,
                msg: "Please enter a valid first name."
            }
        }
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: {
                args: [1, 25],
                msg: "Last name must be between 1 and 25 characters."
            },
            is: {
                args: /^[a-zA-Z]+$/,
                msg: "Please enter a valid last name."
            }
        }
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: {
                args: /^[6789][0-9]{9}$/,
                msg: "Please enter a valid mobile number."
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: {
                msg: "Please enter a valid email."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: {
                args: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
                msg: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character."
            }
        }
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    }
}, {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
});

export default User;