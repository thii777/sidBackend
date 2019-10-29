module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('products', 'color', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('products', 'color');
    },
};
