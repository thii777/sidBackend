import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import ProductController from './app/controllers/ProductController';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/products', ProductController.store);

routes.post('/files', uploads.array('file'), (req, res) => {
    return res.json({ ok: true });
});

export default routes;
