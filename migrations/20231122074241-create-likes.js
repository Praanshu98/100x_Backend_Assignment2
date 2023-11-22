"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Likes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
            post_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                references: {
                    model: "Posts",
                    key: "id",
                },
            },
            like_date_time: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable("Likes");
    },
};
