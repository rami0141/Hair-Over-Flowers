module.exports = function (sequelize, Sequelize) {

    var Appointment = sequelize.define('Appointment', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        name: { type: Sequelize.TEXT, allowNull: false },
        phone: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING },
        service: { type: Sequelize.STRING },
        appDate: { type: Sequelize.STRING, allowNull: false },
        stylist: { type: Sequelize.STRING, allowNull: false },
        comments: { type: Sequelize.STRING, allowNull: false }
    });

    return Appointment;
}