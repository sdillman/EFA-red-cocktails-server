const { UserModel } = require("./User");
const CocktailModel = require("./Cocktail");
const CommentModel = require("./Comment");
const RoleModel = require("./Role");
const PermissionModel = require("./Permission");
const RolePermissionModel = require("./Role_Permission");



// UserModel.hasMany(CommentModel, { onDelete: "CASCADE"})
// CommentModel.belongsTo(UserModel)

// UserModel.hasMany(CocktailModel, { onDelete: "CASCADE"})
// CocktailModel.belongsTo(UserModel)

// UserModel.hasOne(RoleModel, {})
// RoleModel.belongsTo(UserModel)

// RoleModel.belongsToMany(PermissionModel, { through: "Role_Permission"})
// PermissionModel.belongsToMany(RoleModel, { through: "Role_Permission"})



module.exports = { UserModel, CocktailModel, CommentModel, RoleModel, PermissionModel, RolePermissionModel };