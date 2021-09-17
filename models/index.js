// Grab db instance
const { sequelize, syncDb } = require('../db')
const { DataTypes } = require('sequelize')

// Grab Model Functions
const DefineUser = require('./User')
const DefineComment = require("./Comment");
const DefineCocktail = require("./Cocktail");
const DefineRole = require("./Role");
const DefinePermission = require("./Permission");
const DefineRolePermission = require("./Role_Permission");

// Define the models
const User = DefineUser(sequelize, DataTypes)
const Comment = DefineComment(sequelize, DataTypes)
const Cocktail = DefineCocktail(sequelize, DataTypes)
const Role = DefineRole(sequelize, DataTypes)
const Permission = DefinePermission(sequelize, DataTypes)
// const RolePermission = DefineRolePermission(sequelize, DataTypes)    Apparently not needed - database creates this automagically. Will delete next commit if this holds up

// Define Associations
User.hasMany(Comment, { onDelete: "CASCADE"})
Comment.belongsTo(User)

User.hasMany(Cocktail, { onDelete: "CASCADE"})
Cocktail.belongsTo(User)

User.hasOne(Role, {})
Role.belongsTo(User)

Role.belongsToMany(Permission, { through: "Role_Permission"})
Permission.belongsToMany(Role, { through: "Role_Permission"})

// Sync
syncDb(sequelize, { alter:true })

module.exports = { User, Comment, Cocktail };