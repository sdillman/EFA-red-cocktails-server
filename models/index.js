const UserModel = require("./User");
const CocktailModel = require("./Cocktail");
const CommentModel = require("./Comment");
const RoleModel = require("./Role");
const PermissionModel = require("./Permission");
const RolePermissionModel = require("./Role_Permission");



User.hasMany(Comment, { onDelete: "CASCADE"})
Comment.belongsTo(User)

User.hasMany(Cocktail, { onDelete: "CASCADE"})
Cocktail.belongsTo(User)

User.hasOne(Role, {})
Role.belongsTo(User)

Role.belongsToMany(Permission, { through: "Role_Permission"})
Permission.belongsToMany(Role, { through: "Role_Permission"})



module.exports = { UserModel, CocktailModel, CommentModel, RoleModel, PermissionModel, RolePermissionModel };