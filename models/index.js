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
  foreignKey: "owner_id",
  onDelete: "CASCADE",
});

Owner.hasMany(Post, {
  foreignKey: "owner_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Post.belongsTo(Owner, {
  foreignKey: "owner_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Owner, {
  foreignKey: "owner_id",
  onDelete: "SET NULL",
});

module.exports = { Owner, Dog, Post, Comment };
