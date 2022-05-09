import Sequelize from 'sequelize';
import { connection } from '../database/connection.js';

export const filmes = connection.define('filmes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diretor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
});

// const initTable = async () => {
//   await filmes.sync({ force: true });
//   }

//   initTable();
