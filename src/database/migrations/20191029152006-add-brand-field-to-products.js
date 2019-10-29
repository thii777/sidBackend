module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('products', 'brand', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('products', 'brand');
    },
};
