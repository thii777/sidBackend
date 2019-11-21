module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'sidpostgres',
    database: 'Products',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
