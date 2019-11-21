module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('accessories', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            brand: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            size: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            color: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('accessories');
    },
};
