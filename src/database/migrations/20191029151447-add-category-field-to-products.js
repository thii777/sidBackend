module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('products', 'category', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('products', 'category');
    },
};
