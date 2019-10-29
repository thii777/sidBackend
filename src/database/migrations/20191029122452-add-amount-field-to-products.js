module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('products', 'amount', {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('products', 'amount');
    },
};
