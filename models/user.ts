import connection from "../db/connection";
import { DataTypes } from "sequelize";

const User = connection.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "avatar.jpg",
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["username"],
      },
      { unique: true, fields: ["email"] },
    ],
    timestamps: false,
  }
);

export default User;
