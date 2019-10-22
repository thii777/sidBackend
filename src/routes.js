import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Sid Surf Store' }));

export default routes;
