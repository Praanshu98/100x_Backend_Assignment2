"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    isEmail: true,
                },
            },
            password_hash: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            bio: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            profile_pic: {
                type: Sequelize.STRING,
            },
            join_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            location: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    },
};
