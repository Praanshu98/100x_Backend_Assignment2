"use strict";
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Followers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                // primaryKey: true,
                type: Sequelize.INTEGER,
            },
            follower_id: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.BIGINT,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
            following_id: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.BIGINT,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
            follow_time: {
                type: Sequelize.DATE,
                allowNull: false,
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
        await queryInterface.addConstraint("Followers", {
            fields: ["follower_id", "following_id"],
            type: "check",
            where: {
                follower_id: {
                    [Sequelize.Op.ne]: Sequelize.col("following_id"),
                },
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Followers");
    },
};
