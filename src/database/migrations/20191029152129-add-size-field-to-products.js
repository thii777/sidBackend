module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('products', 'size', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('products', 'size');
    },
};
