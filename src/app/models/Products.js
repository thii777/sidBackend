import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                product_name: Sequelize.STRING,
                description: Sequelize.STRING,
                price: Sequelize.DECIMAL,
            },
            {
                sequelize,
            }
        );
    }
}

export default Product;
