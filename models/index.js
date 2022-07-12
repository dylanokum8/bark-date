//import all models
const Owner = require("./Owner");
const Dog = require("./Dog");
const Post = require("./Post");
const Comment = require("./Comment");

//create associations
Owner.hasMany(Dog, {
  foreignKey: "owner_id",
});

Dog.belongsTo(Owner, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Post.belongsTo(Owner, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Owner, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = { Owner, Dog, Post, Comment };
