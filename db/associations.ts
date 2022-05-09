import Todo from "../models/todo";
import User from "../models/user";

export default function associations() {
  User.hasMany(Todo);
  Todo.belongsTo(User);
}
