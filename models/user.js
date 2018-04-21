module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('User', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        username: { type: Sequelize.TEXT, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: false }

    });

    return User;

}