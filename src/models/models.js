import Sequelize from 'sequelize';
import { connection } from '../database/connection';

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
  diretor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  capa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  iframe: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
});

// const initTable = async () => {
//   await F ilmes.sync({ force: true });
//   }

  // initTable();
