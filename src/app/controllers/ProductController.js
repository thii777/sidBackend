import Product from '../models/Product';
import File from '../models/File';

class ProductController {
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json({ product });
    }

    async index(req, res) {
        const { id } = req.params;

        const product = await Product.findAll({
            id,
            include: [
                {
                    model: File,
                    as: 'images',
                    attributes: ['id', 'name', 'path', 'url'],
                },
            ],
        });
        // console.tron.log(product);
        return res.json(product);
    }
}

export default new ProductController();
