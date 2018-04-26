module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        username: { type: Sequelize.TEXT, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: false },
        stylistName: { type: Sequelize.STRING }

    });

    return User;

}