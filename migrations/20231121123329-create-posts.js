"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Posts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            user_id: {
                allowNull: false,
                type: Sequelize.BIGINT,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
            content: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            creation_time: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            is_reply: {
                type: Sequelize.BOOLEAN,
            },
            original_post_id: {
                type: Sequelize.BIGINT,
                references: {
                    model: "Posts",
                    key: "id",
                },
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
        await queryInterface.dropTable("Posts");
    },
};
