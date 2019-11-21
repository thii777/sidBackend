import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import AccessoriesController from './app/controllers/AccessoriesController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post(
    '/accessories',
    upload.single('image'),
    AccessoriesController.store
);
routes.get('/accessories', AccessoriesController.index);
routes.get('/accessories/:id', AccessoriesController.show);

routes.post('/products', upload.single('image'), ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

export default routes;
