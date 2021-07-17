import express from 'express';
import './src/database';
import homeRoutes from './src/routes/homeRouter';
import userRoutes from './src/routes/userRouter';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // utilizado para manipular conteudos em requisições POST
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // eslint-disable-next-line class-methods-use-this
  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
