import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import ProductController from './app/controllers/ProductController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/products', ProductController.store);
routes.post('/files', upload.array('file'), FileController.store);

export default routes;
