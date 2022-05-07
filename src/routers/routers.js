import express from 'express';
import {
  getIndex,
  getDetalhes,
  getDeletar,
  getCriar,
  postCriar,
  getEditar,
  postEditar,
} from '../controllers/controllador.js';

export const routers = express.Router();

routers.get('/', getIndex);
routers.get('/detalhes', getDetalhes);
routers.get('/deletar/:id', getDeletar);
routers.get('/criar', getCriar);
routers.get('/editar/:id', getEditar);

routers.post('/criar', postCriar);
routers.post('/editar/:id', postEditar);
