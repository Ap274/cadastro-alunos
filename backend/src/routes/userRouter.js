import { Router } from 'express';
import UserController from '../controller/UserController';
import User from '../model/User';

const router = new Router();
router.post('/', UserController.create);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
index - lista todos os arquivos - GET
store/create - cria um novo registro - POST
delete - apaga um registro - DELETE
show - mostra um registro - GET
update - atualiza um registro - PATCH/PUT
*/
