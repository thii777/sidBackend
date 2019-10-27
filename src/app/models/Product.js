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

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'image_product_id' });
    }
}

export default Product;
