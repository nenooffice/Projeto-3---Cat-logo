import Sequelize from '../../config/sequelize';
import {} from 'dotenv/config';


export const Sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, 
 process.env.DB_BASE,
 process.env.DB_USER,
 process.env.DB_PASS,
  {
  host: process.env.DB_HOST,
  port: 5432,
  dialect: 'postgres',
});