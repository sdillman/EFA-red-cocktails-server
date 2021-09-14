// an object with key val pairs
// importing the controller files through index.js so they can be used in app.js

module.exports = {
    userController: require("./userController"),
    cocktailController: require("./cocktailController"),
    commentController: require("./commentController"),
    roleController: require("./roleController"),
    permissionController: require("./permissionController")
};