//=================================================
//EXAMPLE CODE
// // import all models
// const Post = require("./Post");
// const User = require("./User");
// const Comment = require("./Comment");

// // create associations
// Post.hasMany(Comment, {
//   foreignKey: "post_id",
// });

// Post.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// module.exports = { User, Post, Comment };
//=================================================

//import all modelx
const Owner = require("./Owner");
const Dog = require("./Dog");

//create associations
Owner.hasMany(Dog, {
  foreignKey: "owner_id",
});

Dog.belongsTo(Owner, {
  foreignKey: "owner_id",
  onDelete: "SET NULL",
});

module.exports = (Owner, Dog);
