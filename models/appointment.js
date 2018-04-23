  module.exports = function(sequelize, DataTypes) {

    var Appointment = sequelize.define("Appointment", {
        id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
        name: { type: DataTypes.TEXT, allowNull: false },
        phone: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        service: { type: DataTypes.STRING },
        appMonth: { type: DataTypes.STRING, allowNull: false },
        appDay: { type: DataTypes.INTEGER, allowNull: false },
        appTime: { type: DataTypes.STRING, allowNull: false },
        stylist: { type: DataTypes.STRING, allowNull: false },
        comments: { type: DataTypes.STRING, allowNull: false }
    });

    return Appointment;
}